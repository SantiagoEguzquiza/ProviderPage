import type { CSSProperties, MouseEvent } from 'react';
import { Cloud, LayoutDashboard, Package, Receipt, Users, WifiOff } from 'lucide-react';
import { features } from '../../data/site';

const icons = {
	'wifi-off': WifiOff,
	users: Users,
	receipt: Receipt,
	package: Package,
	cloud: Cloud,
	'layout-dashboard': LayoutDashboard,
} as const;

function spotlightMove(e: MouseEvent<HTMLElement>) {
	const el = e.currentTarget;
	const r = el.getBoundingClientRect();
	el.style.setProperty('--sx', `${e.clientX - r.left}px`);
	el.style.setProperty('--sy', `${e.clientY - r.top}px`);
}

export default function FeatureBento() {
	return (
		<section
			id={features.id}
			aria-labelledby="features-heading"
			className="section-snap-panel relative flex min-h-[100dvh] snap-start snap-always flex-col overflow-hidden border-t border-[#154d6c]/10 bg-[#f8fafc] py-20 transition-theme-colors delay-150 ease-in-out duration-500 sm:py-24 dark:border-[#f8fafc]/10 dark:bg-[#262D33] [--stagger:150ms]"
			data-scroll-reveal
		>
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(28_181_172/0.12),transparent)]"
				aria-hidden
			/>
			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2
						id="features-heading"
						className="text-gradient-section text-3xl font-semibold tracking-tighter leading-tight text-balance sm:text-4xl"
					>
						{features.title}
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-[#64748b] transition-theme-colors dark:text-[#94a3b8]">
						{features.subtitle}
					</p>
				</div>

				<ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{features.items.map((item) => {
						const Icon = icons[item.icon];
						const spotlight: CSSProperties = {
							background:
								'radial-gradient(520px circle at var(--sx, 50%) var(--sy, 50%), rgb(28 181 172 / 0.1), transparent 42%)',
						};
						return (
							<li key={item.id}>
								<article
									className="feature-bento-card group relative h-full overflow-hidden rounded-2xl border border-[#154d6c]/15 bg-white/60 p-6 shadow-[var(--shadow-card)] ring-1 ring-[#154d6c]/10 backdrop-blur-md backdrop-saturate-150 hover:-translate-y-0.5 hover:border-[#154d6c]/25 hover:shadow-[0_24px_56px_rgb(21_77_108/0.08)] dark:border-[#f8fafc]/12 dark:bg-[#2a3239]/90 dark:ring-[#f8fafc]/10 dark:hover:border-[#1cb5ac]/35 dark:hover:shadow-[0_24px_56px_rgb(0_0_0/0.35)]"
									onMouseMove={spotlightMove}
								>
									<div
										className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
										style={spotlight}
										aria-hidden
									/>
									<div className="relative">
										<div className="mb-4 inline-flex rounded-xl border border-[#154d6c]/12 bg-[#e6f7f5]/90 p-3 text-[#1cb5ac] shadow-sm backdrop-blur-sm transition-theme-colors dark:border-[#1cb5ac]/30 dark:bg-[#1e252b]/90">
											<Icon className="size-6" strokeWidth={1.5} aria-hidden />
										</div>
										<h3 className="text-lg font-semibold tracking-tight text-[#154d6c] transition-theme-colors dark:text-[#f8fafc]">
											{item.title}
										</h3>
										<p className="mt-2 text-sm leading-relaxed text-[#64748b] transition-theme-colors dark:text-[#94a3b8]">
											{item.text}
										</p>
									</div>
								</article>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
