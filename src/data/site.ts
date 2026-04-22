/**
 * Central copy for the Provider landing page. Edit here to update site text.
 */

export const site = {
	name: 'Provider',
	tagline: 'La plataforma móvil para proveedores y distribuidoras.',
} as const;

export const nav = [
	{ label: 'Características', href: '#caracteristicas' },
	{ label: 'Ciclo comercial', href: '#para-quien' },
	{ label: 'Tecnología', href: '#tecnologia' },
	{ label: 'Roadmap', href: '#roadmap' },
] as const;

export const hero = {
	badge: 'Gestión comercial y logística en tu bolsillo',
	title: 'Tu distribuidora, conectada y operativa en todo momento.',
	subtitle:
		'Capacita a tus vendedores y repartidores con una app móvil potente. Gestiona ventas, inventario y clientes en tiempo real, incluso sin conexión a internet.',
	ctaPrimary: 'Solicitar Demo',
	ctaSecondary: 'Hablar con un asesor',
	/** Hero: light theme — `public/screenshots/mainMenu_white.png` */
	screenshotLight: '/screenshots/mainMenu_white.png',
	/** Hero: dark theme — `public/screenshots/mainMenu_black.png` */
	screenshotDark: '/screenshots/mainMenu_black.png',
	/** Pixel size of both PNGs (same dimensions; update if assets change). */
	screenshotWidth: 1459,
	screenshotHeight: 3077,
} as const;

export const trust = {
	headline: 'La infraestructura confiable para la cadena de suministro',
	logos: ['Nexus Logística', 'Andes Supply', 'Pacífico Trade', 'Sur Industrial', 'Metro Distribución'],
} as const;

export const features = {
	id: 'caracteristicas',
	title: 'Todo lo que tu equipo necesita en la calle',
	subtitle:
		'Diseñado para entornos reales de trabajo, Provider simplifica la operación desde la preventa hasta la entrega.',
	items: [
		{
			id: 'offline',
			icon: 'wifi-off' as const,
			title: 'Operación Offline Garantizada',
			text: '¿Te quedaste sin señal? No hay problema. Sigue vendiendo y registrando datos; el sistema se sincronizará automáticamente al recuperar la conexión.',
		},
		{
			id: 'clientes',
			icon: 'users' as const,
			title: 'Gestión Integral de Clientes',
			text: 'Accede al historial comercial, ubicación, lista de precios y registro de visitas en segundos, directamente desde el móvil.',
		},
		{
			id: 'comprobantes',
			icon: 'receipt' as const,
			title: 'Comprobantes Digitales',
			text: 'Genera y comparte comprobantes en PDF al instante vía WhatsApp o correo, acelerando el cierre de la venta.',
		},
		{
			id: 'inventario',
			icon: 'package' as const,
			title: 'Control de Inventario',
			text: 'Consulta disponibilidad, precios y recibe alertas de stock bajo antes de comprometer una venta con el cliente.',
		},
		{
			id: 'multitenant',
			icon: 'cloud' as const,
			title: 'Infraestructura Corporativa Segura',
			text: 'Arquitectura de vanguardia que garantiza el aislamiento total de tus datos, permitiendo que tu empresa crezca sin límites técnicos y con máxima privacidad.',
		},
		{
			id: 'cotizaciones',
			icon: 'layout-dashboard' as const,
			title: 'Cotizaciones en Tiempo Real',
			text: 'Consulta el tipo de cambio actualizado con almacenamiento local para que siempre tengas los precios correctos.',
		},
	],
} as const;

export const roles = {
	id: 'para-quien',
	title: 'Todo el ciclo comercial en una sola app',
	tabs: [
		{
			id: 'clientes',
			label: 'Gestión de Clientes',
			description:
				'Registra nuevos clientes, actualiza su información de contacto y organiza tu cartera para optimizar las rutas y visitas en campo.',
			mockupHeaderText: 'Provider Clientes',
			// Colocar `gestion_clientes.png` en `public/` y asignar a `screenshot` cuando quieras mostrarlo.
			// screenshot: '/gestion_clientes.png',
			screenshot: null as string | null,
		},
		{
			id: 'productos',
			label: 'Gestión de Productos',
			description:
				'Mantén el catálogo actualizado, precios, códigos y variantes, con stock y disponibilidad clara para tu equipo en ruta.',
			mockupHeaderText: 'Provider Productos',
			screenshot: null as string | null,
		},
		{
			id: 'cuenta-corriente',
			label: 'Cuenta Corriente',
			description:
				'Consulta saldos, comprobantes y movimientos con el cliente, con historial claro y seguimiento de lo pendiente.',
			mockupHeaderText: 'Provider Cuenta corriente',
			screenshot: null as string | null,
		},
		{
			id: 'ventas',
			label: 'Gestión de Ventas',
			description:
				'Crea pedidos de forma ágil, selecciona productos, aplica listas y calcula totales frente al cliente, incluso en modo offline.',
			mockupHeaderText: 'Provider Ventas',
			screenshot: null as string | null,
		},
		{
			id: 'compras',
			label: 'Gestión de Compras',
			description:
				'Registra pedidos a proveedores, condiciones y recepciones para alinear abastecimiento con lo que vende tu equipo en campo.',
			mockupHeaderText: 'Provider Compras',
			screenshot: null as string | null,
		},
		{
			id: 'cotizaciones',
			label: 'Cotizaciones',
			description:
				'Arma presupuestos con el tipo de cambio y listas al día, y compártelos con el cliente para acelerar el cierre comercial.',
			mockupHeaderText: 'Provider Cotizaciones',
			screenshot: null as string | null,
		},
	],
} as const;

export const techSection = {
	id: 'tecnologia',
	title: 'Tecnología pensada para campo y escala',
	body:
		'Provider combina una app móvil fluida con sincronización inteligente y respaldo en la nube, para que tu equipo trabaje con la misma información esté donde esté.',
} as const;

export const roadmap = {
	id: 'roadmap',
	title: 'En constante evolución',
	subtitle: 'Provider crece contigo. Descubre lo que estamos construyendo para el futuro de tu logística.',
	items: [
		'Planificación y optimización automática de rutas.',
		'Visualización de clientes y zonas en mapas interactivos.',
		'Integración fluida con tu sistema contable (ERP) actual.',
		'Panel web administrativo con reportes comerciales avanzados.',
	],
} as const;

export const finalCta = {
	title: '¿Listo para modernizar tu logística?',
	text: 'Únete a las empresas que ya están optimizando sus ventas, inventario y entregas con Provider.',
	primary: 'Comenzar ahora',
	secondary: 'Contactar al desarrollador',
} as const;

export const footer = {
	tagline: 'La plataforma móvil para proveedores y distribuidoras.',
	columns: {
		producto: {
			title: 'Producto',
			links: [
				{ label: 'Características', href: '#caracteristicas' },
				{ label: 'Ciclo comercial', href: '#para-quien' },
				{ label: 'Modo Offline', href: '#caracteristicas' },
			],
		},
		empresa: {
			title: 'Empresa',
			links: [
				{ label: 'Roadmap', href: '#roadmap' },
				{ label: 'Contacto', href: '#cta' },
				{ label: 'Privacidad', href: '#' },
			],
		},
	},
	legal: '© 2026 Provider App. Todos los derechos reservados. Desarrollado con Flutter y .NET.',
} as const;
