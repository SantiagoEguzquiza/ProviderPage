import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { hero, nav, site } from '../../data/site';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={[
				'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300',
				scrolled
					? 'border-b border-[#e5e7eb]/80 bg-white/95 shadow-[0_1px_0_rgb(0_0_0/0.03)] backdrop-blur-md'
					: 'border-b border-transparent bg-white/0',
			].join(' ')}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<a href="#" className="text-lg font-semibold tracking-tight text-[#111827]">
					{site.name}
				</a>

				<nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm font-medium text-[#4b5563] transition hover:text-[#111827]"
						>
							{item.label}
						</a>
					))}
					<a
						href="#cta"
						className="rounded-lg bg-[#1d4ed8] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e40af]"
					>
						{hero.ctaPrimary}
					</a>
				</nav>

				<button
					type="button"
					className="inline-flex rounded-lg p-2 text-[#111827] md:hidden"
					aria-expanded={open}
					aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X className="size-6" strokeWidth={1.75} /> : <Menu className="size-6" strokeWidth={1.75} />}
				</button>
			</div>

			{open ? (
				<div className="border-t border-[#e5e7eb] bg-white px-4 py-4 md:hidden">
					<nav className="flex flex-col gap-3" aria-label="Móvil">
						{nav.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="rounded-lg px-2 py-2 text-sm font-medium text-[#374151]"
								onClick={() => setOpen(false)}
							>
								{item.label}
							</a>
						))}
						<a
							href="#cta"
							className="mt-1 rounded-lg bg-[#1d4ed8] px-4 py-3 text-center text-sm font-semibold text-white"
							onClick={() => setOpen(false)}
						>
							{hero.ctaPrimary}
						</a>
					</nav>
				</div>
			) : null}
		</header>
	);
}
