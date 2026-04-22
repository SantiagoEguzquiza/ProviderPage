import { Smartphone } from 'lucide-react';
import { useState } from 'react';
import { roles } from '../../data/site';

const tabBase =
	'rounded-2xl border px-4 py-4 text-left transition-[border-color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform';

const DEFAULT_SHOT_W = 1280;
const DEFAULT_SHOT_H = 2856;

type RoleTabScreenshotProps = {
	imageSrc: string | null;
	alt: string;
	placeholderLabel: string;
	loading: 'eager' | 'lazy';
};

/** Screenshot-as-is (no extra frame). Fallback: Pixel-style shell + “próximamente” when `imageSrc` is null. */
function RoleTabScreenshot({ imageSrc, alt, placeholderLabel, loading }: RoleTabScreenshotProps) {
	if (imageSrc) {
		return (
			<div className="flex h-full min-h-0 w-full items-center justify-center">
				<div
					className="relative w-full max-w-[min(100%,280px)] shrink-0 sm:max-w-[min(100%,300px)]"
					style={{ aspectRatio: `${DEFAULT_SHOT_W} / ${DEFAULT_SHOT_H}` }}
				>
					<img
						className="device-screenshot-img device-screenshot-deferred h-full w-full object-contain object-center"
						src={imageSrc}
						alt={alt}
						width={DEFAULT_SHOT_W}
						height={DEFAULT_SHOT_H}
						loading={loading}
						decoding="async"
						fetchPriority={loading === 'eager' ? 'high' : undefined}
					/>
				</div>
			</div>
		);
	}

	return (
		<div
			className={[
				'relative mx-auto w-full max-w-[min(100%,280px)] sm:max-w-[min(100%,300px)]',
				'aspect-[9/20] shrink-0',
			].join(' ')}
		>
			<div
				className={[
					'absolute inset-0 flex flex-col rounded-[calc(3rem+10px)] bg-slate-900 p-[10px]',
					'shadow-[var(--shadow-phone-long)] ring-1 ring-black/50',
				].join(' ')}
			>
				<div className="relative h-full min-h-0 w-full min-w-0 overflow-hidden rounded-[3rem] bg-black">
					<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#154d6c] via-[#1a5f72] to-[#1cb5ac] px-4 py-8 text-center">
						<div
							className="pointer-events-none absolute left-1/2 top-3 z-30 size-[11px] -translate-x-1/2 rounded-full bg-black ring-1 ring-black/80 sm:top-3.5 sm:size-3"
							aria-hidden
						/>
						<div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm">
							<Smartphone className="size-9 text-white/90" strokeWidth={1.25} aria-hidden />
						</div>
						<p className="text-[11px] font-semibold uppercase tracking-wide text-white/90">{placeholderLabel}</p>
						<p className="text-[10px] font-medium leading-snug text-white/70">Captura próximamente</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function RoleTabs() {
	const [active, setActive] = useState(0);
	const current = roles.tabs[active]!;

	return (
		<section
			id={roles.id}
			className="section-snap-panel relative min-h-0 flex-1 overflow-hidden border-t border-[#154d6c]/10 bg-white py-20 transition-theme-colors sm:py-24 dark:border-[#f8fafc]/10 dark:bg-[#262D33]"
			data-scroll-reveal
		>
			<div
				className="pointer-events-none absolute right-0 top-1/4 h-[min(60vw,480px)] w-[min(60vw,480px)] translate-x-1/3 rounded-full bg-[#1cb5ac]/12 blur-[100px]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute bottom-0 left-0 h-[min(50vw,360px)] w-[min(50vw,360px)] -translate-x-1/4 rounded-full bg-[#154d6c]/10 blur-[90px]"
				aria-hidden
			/>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-gradient-section text-3xl font-semibold tracking-tighter leading-tight text-balance sm:text-4xl">
						{roles.title}
					</h2>
				</div>

				<div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
					<div role="tablist" aria-label="Pasos del ciclo comercial" className="flex flex-col gap-2">
						{roles.tabs.map((tab, i) => {
							const selected = i === active;
							return (
								<button
									key={tab.id}
									type="button"
									role="tab"
									id={`role-tab-${tab.id}`}
									aria-selected={selected}
									aria-controls={`role-panel-${tab.id}`}
									tabIndex={selected ? 0 : -1}
									onClick={() => setActive(i)}
									className={[
										tabBase,
										selected
											? 'scale-[1.01] border-[#1cb5ac]/35 bg-gradient-to-br from-[#e6f7f5] to-white shadow-[0_8px_32px_-8px_rgb(28_181_172/0.22)] ring-1 ring-[#1cb5ac]/15 dark:from-[#1e252b] dark:to-[#2a3239] dark:ring-[#1cb5ac]/25'
											: 'border-transparent bg-[#f8fafc]/95 backdrop-blur-sm hover:scale-[1.005] hover:border-[#154d6c]/12 hover:bg-white hover:shadow-[var(--shadow-soft)] dark:bg-[#2a3239]/95 dark:hover:border-[#f8fafc]/12 dark:hover:bg-[#323a42]',
									].join(' ')}
								>
									<span className="block text-sm font-semibold tracking-tight text-[#154d6c] transition-theme-colors dark:text-[#f8fafc]">
										{tab.label}
									</span>
									<span className="mt-1 block text-sm leading-relaxed text-[#64748b] transition-theme-colors dark:text-[#94a3b8] lg:hidden">
										{tab.description}
									</span>
								</button>
							);
						})}
					</div>

					<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
						<div
							key={active}
							role="tabpanel"
							id={`role-panel-${current.id}`}
							aria-labelledby={`role-tab-${current.id}`}
							className="workflow-cross min-h-[8rem]"
						>
							<p className="hidden text-base leading-relaxed text-[#64748b] transition-theme-colors dark:text-[#94a3b8] lg:block">
								{current.description}
							</p>
						</div>

						<div
							className="relative mx-auto flex w-full max-w-[280px] justify-center lg:mx-0 lg:max-w-none"
							aria-hidden
						>
							<div className="relative aspect-[9/20] w-full max-w-[min(100%,280px)] sm:max-w-[min(100%,300px)]">
								{roles.tabs.map((tab, i) => {
									const isOn = i === active;
									return (
										<div
											key={tab.id}
											className={[
												'absolute inset-0 flex justify-center',
												'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
												isOn
													? 'z-10 translate-y-0 opacity-100'
													: 'z-0 translate-y-3 opacity-0 pointer-events-none',
											].join(' ')}
										>
											<RoleTabScreenshot
												imageSrc={tab.screenshot}
												alt={`Vista de la app: ${tab.mockupHeaderText}`}
												placeholderLabel={tab.label}
												loading={i === active ? 'eager' : 'lazy'}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
