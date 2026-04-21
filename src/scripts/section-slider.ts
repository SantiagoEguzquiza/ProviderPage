/**
 * Vertical "slider" between full-viewport sections: CSS transform + transition.
 * Wheel respects inner scroll; hash / nav links stay in sync.
 */

const HASH_TO_INDEX: Record<string, number> = {
	'': 0,
	'#': 0,
	'#caracteristicas': 1,
	'#para-quien': 2,
	'#tecnologia': 2,
	'#roadmap': 3,
	'#cta': 4,
	'#footer': 4,
};

/** Canonical hash shown in the URL after each slide settles */
const HASH_FOR_INDEX = ['', '#caracteristicas', '#para-quien', '#roadmap', '#cta'];

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

function initSectionSlider() {
	const root = document.querySelector<HTMLElement>('#page-slider-root');
	const track = document.querySelector<HTMLElement>('#page-slider-track');
	const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-page-slide]'));

	if (!root || !track || slides.length === 0) return;

	const count = slides.length;
	const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	let index = 0;
	let locked = false;

	function applyTransform(i: number) {
		track.style.transform = `translate3d(0, ${-i * 100}dvh, 0)`;
	}

	function setHash(i: number) {
		const h = HASH_FOR_INDEX[i];
		const base = `${window.location.pathname}${window.location.search}`;
		try {
			history.replaceState(null, '', h ? `${base}${h}` : base);
		} catch {
			/* ignore */
		}
	}

	function goTo(next: number) {
		const target = clamp(next, 0, count - 1);
		if (target === index || locked) return;
		locked = true;
		index = target;
		applyTransform(index);
		if (reduceMotion()) {
			locked = false;
			setHash(index);
		}
	}

	function onTransitionEnd(ev: TransitionEvent) {
		if (ev.propertyName !== 'transform') return;
		locked = false;
		setHash(index);
	}

	track.addEventListener('transitionend', onTransitionEnd);

	/** -1 = previous slide, 0 = stay (inner scroll), 1 = next slide */
	function deltaToSlideStep(deltaY: number): -1 | 0 | 1 {
		if (deltaY === 0) return 0;
		const slide = slides[index];
		if (!slide) return 0;
		const down = deltaY > 0;
		const { scrollTop, scrollHeight, clientHeight } = slide;
		const eps = 8;
		const canScrollY = scrollHeight > clientHeight + eps;
		const atBottom = scrollTop + clientHeight >= scrollHeight - eps;
		const atTop = scrollTop <= eps;

		if (down) {
			if (canScrollY && !atBottom) return 0;
			return index < count - 1 ? 1 : 0;
		}
		if (canScrollY && !atTop) return 0;
		return index > 0 ? -1 : 0;
	}

	// Initial slide from hash (no transition on first paint)
	const h = window.location.hash.toLowerCase();
	if (h in HASH_TO_INDEX) {
		index = HASH_TO_INDEX[h] ?? 0;
	}
	track.classList.add('page-slider-track--no-trans');
	applyTransform(index);
	setHash(index);
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			track.classList.remove('page-slider-track--no-trans');
		});
	});

	// In-page links
	document.addEventListener(
		'click',
		(e) => {
			const el = (e.target as Element)?.closest?.('a[href^="#"]');
			if (!(el instanceof HTMLAnchorElement)) return;
			if (el.href.startsWith('mailto:')) return;
			const raw = el.getAttribute('href') ?? '';
			if (raw === '#') {
				e.preventDefault();
				goTo(0);
				return;
			}
			try {
				const hash = new URL(el.href).hash.toLowerCase();
				if (!(hash in HASH_TO_INDEX)) return;
				e.preventDefault();
				goTo(HASH_TO_INDEX[hash] ?? 0);
			} catch {
				/* ignore */
			}
		},
		true
	);

	root.addEventListener(
		'wheel',
		(e) => {
			if (locked) {
				e.preventDefault();
				return;
			}
			const step = deltaToSlideStep(e.deltaY);
			if (step === 0) return;
			e.preventDefault();
			goTo(index + step);
		},
		{ passive: false }
	);

	window.addEventListener('keydown', (e) => {
		if (locked) return;
		let step: -1 | 0 | 1 = 0;
		if (e.key === 'PageDown' || e.key === 'ArrowDown') step = deltaToSlideStep(100);
		else if (e.key === 'PageUp' || e.key === 'ArrowUp') step = deltaToSlideStep(-100);
		else if (e.key === 'Home') {
			e.preventDefault();
			goTo(0);
			return;
		} else if (e.key === 'End') {
			e.preventDefault();
			goTo(count - 1);
			return;
		}
		if (step !== 0) {
			e.preventDefault();
			goTo(index + step);
		}
	});

	let touchY = 0;
	root.addEventListener('touchstart', (e) => {
		touchY = e.touches[0]?.clientY ?? 0;
	}, { passive: true });
	root.addEventListener(
		'touchend',
		(e) => {
			if (locked) return;
			const y = e.changedTouches[0]?.clientY ?? touchY;
			const d = touchY - y;
			if (Math.abs(d) < 56) return;
			goTo(d > 0 ? index + 1 : index - 1);
		},
		{ passive: true }
	);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initSectionSlider, { once: true });
} else {
	initSectionSlider();
}
