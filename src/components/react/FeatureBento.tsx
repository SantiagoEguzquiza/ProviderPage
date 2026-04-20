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

export default function FeatureBento() {
	return (
		<section id={features.id} aria-labelledby="features-heading" className="border-t border-[#e5e7eb] bg-[#f9fafb] py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 id="features-heading" className="text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
						{features.title}
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-[#4b5563]">{features.subtitle}</p>
				</div>

				<ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{features.items.map((item) => {
						const Icon = icons[item.icon];
						return (
							<li key={item.id}>
								<article className="group h-full rounded-2xl border border-[#e5e7eb]/80 bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgb(15_23_42/0.08)]">
									<div className="mb-4 inline-flex rounded-xl bg-[#eff6ff] p-3 text-[#1d4ed8] ring-1 ring-[#bfdbfe]/60">
										<Icon className="size-6" strokeWidth={1.5} aria-hidden />
									</div>
									<h3 className="text-lg font-semibold text-[#111827]">{item.title}</h3>
									<p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{item.text}</p>
								</article>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
