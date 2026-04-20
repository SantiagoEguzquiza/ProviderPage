/**
 * Central copy for the Provider landing page. Edit here to update site text.
 */

export const site = {
	name: 'Provider',
	tagline: 'La plataforma móvil para proveedores y distribuidoras.',
} as const;

export const nav = [
	{ label: 'Características', href: '#caracteristicas' },
	{ label: 'Para quién es', href: '#para-quien' },
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
			title: 'Escalabilidad Multi-Tenant',
			text: 'Infraestructura en la nube con aislamiento total de datos. Tu información comercial está siempre segura y privada.',
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
	title: 'Una herramienta para cada eslabón de tu empresa',
	tabs: [
		{
			id: 'vendedor',
			label: 'Vendedor / Preventista',
			description:
				'Registra ventas en campo, aplica promociones, consulta el historial del cliente y cierra acuerdos más rápido.',
		},
		{
			id: 'repartidor',
			label: 'Repartidor',
			description:
				'Visualiza pedidos pendientes, registra entregas con éxito y confirma la recepción de mercadería en la puerta del cliente.',
		},
		{
			id: 'deposito',
			label: 'Personal de Depósito',
			description:
				'Gestiona el stock físico, realiza ajustes rápidos y prepara los pedidos de forma eficiente para el próximo reparto.',
		},
		{
			id: 'supervisor',
			label: 'Supervisor y Admin',
			description:
				'Monitorea la operación comercial, gestiona catálogos, revisa las métricas de venta y configura la empresa desde un panel centralizado.',
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
				{ label: 'Roles', href: '#para-quien' },
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
