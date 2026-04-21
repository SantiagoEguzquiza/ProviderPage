import { Smartphone } from 'lucide-react';

/** Native pixel dimensions of app screenshots (default 1280×2856, ≈9∶20). */
const DEFAULT_W = 1280;
const DEFAULT_H = 2856;

type DeviceMockupProps = {
	imageSrc: string | null;
	alt: string;
	placeholderLabel: string;
	loading?: 'eager' | 'lazy';
	className?: string;
	/** Matches source image dimensions; avoids distorted layout during decode */
	intrinsicWidth?: number;
	intrinsicHeight?: number;
};

/**
 * Google Pixel 9 Pro–style frame: 9∶20 display, thin slate bezel, punch-hole, screen fill via cover.
 */
export default function DeviceMockup({
	imageSrc,
	alt,
	placeholderLabel,
	loading = 'lazy',
	className = '',
	intrinsicWidth = DEFAULT_W,
	intrinsicHeight = DEFAULT_H,
}: DeviceMockupProps) {
	const w = intrinsicWidth;
	const h = intrinsicHeight;

	return (
		<div
			className={[
				'relative mx-auto w-full max-w-[min(100%,280px)] sm:max-w-[min(100%,300px)]',
				'aspect-[9/20] shrink-0',
				className,
			].join(' ')}
		>
			{/* Thin symmetrical bezels (slate-900); outer radius matches inner 3rem + padding */}
			<div
				className={[
					'absolute inset-0 flex flex-col rounded-[calc(3rem+10px)] bg-slate-900 p-[10px]',
					'shadow-[var(--shadow-phone-long)] ring-1 ring-black/50',
				].join(' ')}
			>
				{/* Screen: strict clip, pronounced Pixel-style corners */}
				<div className="relative h-full min-h-0 w-full min-w-0 overflow-hidden rounded-[3rem] bg-black">
					{imageSrc ? (
						<>
							<img
								src={imageSrc}
								alt={alt}
								width={w}
								height={h}
								sizes="(max-width: 1024px) min(80vw, 280px), 300px"
								srcSet={`${imageSrc} ${w}w`}
								decoding="async"
								loading={loading}
								fetchPriority={loading === 'eager' ? 'high' : undefined}
								className="device-screenshot-img absolute inset-0 box-border h-full w-full max-w-none object-cover object-top"
							/>
							{/* Punch-hole (centered, top of active area) */}
							<div
								className="pointer-events-none absolute left-1/2 top-3 z-30 size-[11px] -translate-x-1/2 rounded-full bg-black ring-1 ring-black/80 sm:top-3.5 sm:size-3"
								aria-hidden
							/>
							{/* Glass reflection */}
							<div
								className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[3rem]"
								aria-hidden
							>
								<div className="absolute -inset-[40%] rotate-[20deg] bg-gradient-to-br from-white/[0.1] via-white/[0.02] to-transparent" />
								<div className="absolute inset-x-0 top-0 h-[36%] bg-gradient-to-b from-white/[0.08] to-transparent" />
								<div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent" />
							</div>
						</>
					) : (
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#154d6c] via-[#1a5f72] to-[#1cb5ac] px-4 py-8 text-center">
							<div className="pointer-events-none absolute left-1/2 top-3 z-30 size-[11px] -translate-x-1/2 rounded-full bg-black ring-1 ring-black/80 sm:top-3.5 sm:size-3" aria-hidden />
							<div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm">
								<Smartphone className="size-9 text-white/90" strokeWidth={1.25} aria-hidden />
							</div>
							<p className="text-[11px] font-semibold uppercase tracking-wide text-white/90">{placeholderLabel}</p>
							<p className="text-[10px] font-medium leading-snug text-white/70">Captura próximamente</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
