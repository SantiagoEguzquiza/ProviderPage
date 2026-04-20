# Provider — Sitio de presentación

Sitio estático de marketing para **Provider**, una plataforma móvil orientada a proveedores y distribuidoras (gestión comercial, logística y operación en campo, con soporte offline entre otras capacidades).

## Requisitos

- [Node.js](https://nodejs.org/) **22.12.0** o superior

## Instalación

```bash
npm install
```

## Scripts

| Comando        | Descripción                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Servidor de desarrollo con recarga   |
| `npm run build`| Compila el sitio a la carpeta `dist` |
| `npm run preview` | Sirve la build localmente para revisar antes de publicar |

## Tecnologías

- [Astro](https://astro.build/) 6
- [React](https://react.dev/) (componentes interactivos)
- [Tailwind CSS](https://tailwindcss.com/) 4 (vía Vite)
- [Lucide React](https://lucide.dev/) (iconos)

## Estructura relevante

- `src/pages/` — Rutas; la página principal es `index.astro`.
- `src/layouts/` — Plantilla base del sitio.
- `src/components/` — Piezas en Astro (`.astro`) y en React (`.tsx`).
- `src/data/site.ts` — Textos centralizados (títulos, navegación, CTA, etc.); conviene editar ahí para cambiar el contenido sin tocar el maquetado.
