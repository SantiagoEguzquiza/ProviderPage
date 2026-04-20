import { useState } from 'react';
import { roles } from '../../data/site';

const accents = [
	{ bar: 'from-blue-600 to-indigo-600', screen: 'from-slate-900 via-slate-800 to-slate-900', chip: 'bg-blue-500/20 text-blue-200' },
	{ bar: 'from-violet-600 to-fuchsia-600', screen: 'from-violet-950 via-slate-900 to-fuchsia-950', chip: 'bg-violet-500/20 text-violet-200' },
	{ bar: 'from-emerald-600 to-teal-600', screen: 'from-emerald-950 via-slate-900 to-teal-950', chip: 'bg-emerald-500/20 text-emerald-200' },
	{ bar: 'from-amber-500 to-orange-600', screen: 'from-amber-950 via-slate-900 to-orange-950', chip: 'bg-amber-500/20 text-amber-200' },
];

const screenLabels = ['Ventas', 'Entregas', 'Depósito', 'Panel'];

export default function RoleTabs() {
	const [active, setActive] = useState(0);
	const current = roles.tabs[active]!;
	const accent = accents[active] ?? accents[0]!;

	return (
		<section id={roles.id} className="border-t border-[#e5e7eb] bg-white py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">{roles.title}</h2>
				</div>

				<div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
					<div role="tablist" aria-label="Roles" className="flex flex-col gap-2">
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
										'rounded-2xl border px-4 py-4 text-left transition',
										selected
											? 'border-[#bfdbfe] bg-[#eff6ff] shadow-[var(--shadow-soft)]'
											: 'border-transparent bg-[#f9fafb] hover:border-[#e5e7eb] hover:bg-white',
									].join(' ')}
								>
									<span className="block text-sm font-semibold text-[#111827]">{tab.label}</span>
									<span className="mt-1 block text-sm leading-relaxed text-[#4b5563] lg:hidden">{tab.description}</span>
								</button>
							);
						})}
					</div>

					<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
						<div
							role="tabpanel"
							id={`role-panel-${current.id}`}
							aria-labelledby={`role-tab-${current.id}`}
							className="min-h-[8rem]"
						>
							<p className="hidden text-base leading-relaxed text-[#4b5563] lg:block">{current.description}</p>
						</div>

						<div
							className="relative mx-auto flex w-full max-w-[280px] justify-center lg:mx-0 lg:max-w-none"
							aria-hidden
						>
							<div className="relative aspect-[9/19] w-[min(100%,260px)] rounded-[2.25rem] border border-[#e5e7eb] bg-[#f3f4f6] p-[10px] shadow-[0_24px_64px_rgb(15_23_42/0.15)]">
								<div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-[#111827]/90" />
								<div
									className={`relative h-full overflow-hidden rounded-[1.85rem] bg-gradient-to-br ${accent.screen} ring-1 ring-white/10`}
								>
									<div
										className={`h-12 bg-gradient-to-r px-4 ${accent.bar} flex items-center justify-between`}
									>
										<span className="text-xs font-semibold text-white/95">Provider</span>
										<span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${accent.chip}`}>
											{screenLabels[active]}
										</span>
									</div>
									<div className="space-y-3 p-4">
										<div className="h-2 w-2/3 rounded bg-white/15" />
										<div className="h-2 w-full rounded bg-white/10" />
										<div className="h-2 w-5/6 rounded bg-white/10" />
										<div className="mt-4 grid gap-2">
											<div className="h-10 rounded-lg bg-white/10" />
											<div className="h-10 rounded-lg bg-white/10" />
											<div className="h-10 rounded-lg bg-white/10" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
