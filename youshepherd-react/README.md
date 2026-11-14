# YouShepherd – Prototipo wireframe (React)

Hecho con React 18 + Vite + React Router (HashRouter) y CSS propio (sin Bootstrap ni Tailwind).

## Estructura
```
src/
├─ main.jsx              Punto de entrada
├─ App.jsx               Rutas del sitio (qué página va en qué URL)
├─ data/content.js       Textos y listas (beneficios, planes, FAQ, equipo...)
├─ styles/
│  ├─ tokens.css         Paleta de colores, tipografías y medidas (variables CSS)
│  └─ base.css           Estilos globales
├─ components/
│  ├─ ui/                Piezas básicas reutilizables: Button, Card, Section, FormField, FaqItem, ImagePlaceholder
│  ├─ layout/            Navbar, Footer y Layout (estructura común de las páginas)
│  └─ sections/          Bloques grandes: Hero, Benefits, Testimonials, CtaBanner, FeatureRow, PricingCard, TeamCard, ContactForm
└─ pages/                Páginas armadas con sus componentes: Home, Features, Pricing, About, Contact, ThankYou, Login
```
Cada componente tiene su propio archivo .css al lado. Para cambiar colores, edita solo `src/styles/tokens.css`.

## Usar en VS Code (PowerShell)
    npm install
    npm run dev        # abre http://localhost:5173
    npm run build      # genera la carpeta dist/

## Publicar gratis en Vercel
1. Sube la carpeta a GitHub (sin node_modules; ya está en .gitignore).
2. En vercel.com: Add New > Project > importa el repositorio > Deploy.
   Vercel detecta Vite solo (build: npm run build, salida: dist).
Alternativa: `npm i -g vercel` y luego `vercel --prod` dentro de la carpeta.

Se usa HashRouter (las URL llevan #, por ejemplo /#/precios) para que funcione en cualquier hosting estático sin configuración extra.
