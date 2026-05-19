# Project: My Portfolio (octgram)

Personal portfolio site built with Next.js 13 (pages router) + TypeScript + React 18.

## Commands

```bash
npm run dev      # next dev — http://localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint     # next lint
```

Use `npm` (not yarn — yarn is not installed locally even though `yarn.lock` is present).

## Stack

- **Framework:** Next.js 13.4.19 (pages router, not app router)
- **Language:** TypeScript 5.2 (strict mode), with some `.jsx` files (sliders)
- **UI:** Bootstrap 5.3 (loaded globally in `pages/_app.tsx`), framer-motion for animation
- **Carousels:** react-slick + slick-carousel
- **Contact form:** emailjs-com

## Path alias

`@/*` → project root (configured in `tsconfig.json`). Example: `import '@/styles/globals.css'`.

## Directory layout

```
pages/                 # Next.js routes (pages router)
  _app.tsx, _document.js
  index.tsx            # home
  about.tsx, contact.tsx
  web.tsx, cyber.tsx   # service pages
  exprience.tsx        # NOTE: misspelling is intentional/preserved
component/             # React components (note: singular "component", not "components")
  Navbar/, Footer/
  Home/                # Home.tsx, preloader.tsx, sections One..Five
  About/, Contact/
  Services/            # Web/, Cyber/, Graphics/
  Why_octagram/        # One/, Two/, exprience/
styles/                # globals + CSS modules
  globals.css
  Home.module.css
  navbar.modul.css     # NOTE: "modul" misspelling preserved
  variables.module.css
  slick-slider-custom.css
public/                # images, svgs, videos, CV.pdf
```

## Conventions

- **CSS:** Mostly CSS Modules (`*.module.css`), imported per-component. Global styles in `styles/globals.css` and Bootstrap loaded in `_app.tsx`.
- **File casing is inconsistent** — match the existing folder when editing:
  - `component/Home/two/` is lowercase
  - `component/Home/Three/`, `Four/`, `Five/`, `One/` are capitalized
- **Mixed .tsx/.jsx:** Slider components (`Slider.jsx`, `Slider_red.jsx`) are JSX, explicitly listed in `tsconfig.json` includes. Keep them as-is unless converting deliberately.
- **Preserved typos** (do not auto-correct): `exprience`, `navbar.modul.css`, package name `octgram`.

## Gotchas

- `_app.tsx` has a no-op `useEffect` that contains the string `"bootstrap/dist/js/bootstrap.js"` but does not actually import it. Bootstrap JS features (collapse, dropdowns) won't work until this is replaced with a real import.
- `target: es5` in `tsconfig.json` — older target than Next.js defaults.
