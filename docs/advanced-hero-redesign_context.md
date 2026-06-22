# Advanced Hero Redesign — Context

> Last updated: 2026-06-22 · Scope: Full portfolio redesign with Three.js, Framer Motion, and advanced visual effects

## Purpose

Transform the portfolio into a cutting-edge showcase combining **generative chaos** (particle systems responding to mouse), **surgical precision** (refined microinteractions), and **cinematic depth** (scroll-driven parallax and layered effects). The portfolio itself becomes a demonstration of advanced web capabilities.

## Key files

### Components
- `component/Home/AdvancedGeometricHero.tsx` — Three.js scene with custom shaders, particle system, and morphing geometry; responds to mouse and scroll
- `component/Home/One/One.tsx` — Hero section entry point; integrates AdvancedGeometricHero, orchestrates Framer Motion stagger sequences, tracks mouse/scroll
- `component/Home/two/two.tsx` — Tech Stack section with glassmorphic cards; displays Angular, React, Nest.js, TypeScript, Node.js, Laravel, AWS, PostgreSQL, Docker, Git
- `component/Home/Four/Four.tsx` — Featured Work section with tab switching and staggered project reveals
- `component/Home/Five/Five.tsx` — CTA section with gradient text and dual-accent buttons

### Styles
- `component/Home/HeroAdvanced.module.css` — Advanced CSS with glassmorphism, backdrop filters, layered depth effects, surgical easing curves
- `styles/globals.css` — Global variables including new palette (--ground, --text, --accent, --accent-2) and font imports

### Configuration
- `pages/_document.js` — Added font imports: Inter, Courier Prime, Fira Code from Google Fonts
- `pages/_app.tsx` — Loads Bootstrap and global styles (no changes needed)

## Design system

### Palette commit
```
Frame:  Digital / Deep Tech
Ground: #0a0e27 (very dark indigo)
Text:   #e8eaed (cool light gray)
Accent: #00f0ff (electric cyan)
Accent-2: #ff00ff (magenta)
```

All page colors derive from these four hexes. No color introduced that isn't a tint, shade, or blend of these.

### Typography
- **Display**: Courier Prime (monospace, 400/700 weight) — signals technical sophistication
- **Body**: Inter (sans-serif, 400/600/700) — clean, readable, modern
- **Utility**: Fira Code (monospace) — for code/data elements

### Layout concept
Viewport-filling Three.js canvas as hero, text overlays via Framer Motion stagger, sections follow with glassmorphic cards in grid layout. Parallax layers add depth throughout.

## Technical implementation

### Three.js (AdvancedGeometricHero.tsx)
- **Scene setup**: Fog for depth (`THREE.Fog`), shadowmap enabled for realistic lighting
- **Main geometry**: Icosahedron (6 subdivisions) with custom shader material
  - Vertex shader: Displaces vertices based on `sin`/`cos` noise, influenced by scroll and mouse
  - Fragment shader: Cyan-to-magenta gradient with fresnel iridescence effect
  - Blending: Additive for glow effect
- **Particle system**: 2000 points with velocity-based animation
  - Positions wrap at bounds (±5 units)
  - Attracted to cursor position with damping (0.98)
  - Size attenuation creates depth perspective
- **Lighting**: 
  - Ambient (white, 0.4 intensity)
  - Directional (magenta, 0.8) with shadow casting
  - Two point lights (cyan at -6,-3,4 and magenta at 6,3,-4) for colored fills
- **Responsiveness**: Mesh rotation influenced by mouseX/mouseY; particles respond to cursor in real-time

### Framer Motion (One.tsx, Two.tsx, Four.tsx, Five.tsx)
- **Container orchestration**: `containerVariants` with `staggerChildren: 0.12`, `delayChildren` varies by section (0.2–0.6s)
- **Item animation**: `itemVariants` with 0.9s duration, cubic-bezier easing `[0.34, 1.56, 0.64, 1]` for snappy feel
- **Scroll tracking**: `useScroll()` feeds scrollY into `useTransform()` for parallax lifts and opacity fades
- **Hover states**: Buttons scale 1.08 on hover, -3px lift; social icons scale 1.12, -6px lift
- **Exit animations**: `AnimatePresence` on Four.tsx tabs for smooth content swaps

### CSS Advanced Features (HeroAdvanced.module.css)
- **Glassmorphism**: `backdrop-filter: blur(10px) brightness(1.05)` on `.heroContent`
- **Keyframe animations**:
  - `morphing` (8s loop) — rotates, scales, translates the geometric form
  - `gradientShift` (6s loop) — animates 300% background gradient horizontally
  - `advancedPulse` (2.5s loop) — expands glow and box shadow on hero dot
  - `shimmer` (4s loop) — slides gradient across button surface
  - `accentPulse` (3s loop) — modulates accent bar opacity and glow
- **Depth layers**: `.depthLayerFront` and `.depthLayerBack` with radial gradients and minimal blur for layered appearance
- **Shadow stacking**: 
  - Outer: `0 20px 60px rgba(0, 240, 255, 0.1)` (drop shadow)
  - Inset: `inset 0 0 20px rgba(0, 240, 255, 0.05)` (inner glow)
  - Glow: `0 0 60px rgba(0, 240, 255, 0.1)` (halo)

## Data flow

1. **Page load** → One.tsx mounts
2. **Mouse move** → `handleMouseMove` updates `mousePos` state → passed to AdvancedGeometricHero
3. **Scroll** → `scrollY` from `useScroll()` → fed to AdvancedGeometricHero and contentY `useTransform()` → lifts content upward
4. **Three.js render loop** (60fps):
   - Updates shader uniforms: `time`, `scroll`, `mouseInfluence`
   - Morphs geometry via vertex displacement
   - Animates particles with velocity + cursor attraction
   - Renders to canvas
5. **Framer Motion** → observes scroll/hover → triggers stagger sequences and parallax transforms on sibling sections (Two, Four, Five)

## State & Lifecycle

### AdvancedGeometricHero.tsx
- **useRef**: containerRef, sceneRef, meshRef, particlesRef, rendererRef, cameraRef, timeRef
- **useEffect** (once on mount):
  - Creates Three.js scene, camera, renderer
  - Builds geometry, shaders, particle system, lights
  - Starts animation loop (requestAnimationFrame)
  - Cleanup: Cancels animation, disposes geometries/materials/renderer, removes DOM element
- **External state**: `scrollY`, `mouseX`, `mouseY` — passed as props, don't trigger re-render

### One.tsx
- **useRef**: sectionRef
- **useState**: scrollValue (updated by scrollY listener), mousePos (updated by mousemove listener)
- **useEffect**: 
  1. Subscribes to scrollY changes
  2. Adds mousemove listener to window
  3. Cleanup: Unsubscribes, removes listener
- **useScroll()**: Tracks document scroll, feeds into parallax via useTransform
- **useTransform()**: 
  - `contentY`: Maps scrollY [0, 500] → [0, 150px] upward lift
  - `contentOpacity`: Maps scrollY [0, 300] → [1, 0] fade

## Decisions & gotchas

### Decision: Custom shader material over standard materials
- **Why**: Standard materials can't achieve the morphing displacement + iridescence + additive blending combo needed for the "generative" feel
- **How**: Built vertex and fragment shaders inline; uniform `time`, `scroll`, `mouseInfluence` drive procedural displacement
- **Alternative rejected**: Three.js material library (less flexible, harder to sync with Framer Motion state)

### Decision: 2000-point particle system instead of procedural volumetric
- **Why**: Particles are individually controllable (attracted to cursor), visible as distinct elements, lighter than volumetric rendering
- **How**: BufferGeometry with position/velocity attributes, updated each frame with damping and cursor attraction
- **Alternative rejected**: Volumetric fog (beautiful but static, can't respond to input)

### Decision: Glassmorphism + backdrop filters on content
- **Why**: Layered depth effect makes content feel "floating" above the 3D canvas; matches cinematic direction
- **How**: `backdrop-filter: blur(10px)` + semi-transparent background + inset shadows
- **Gotcha**: Backdrop filters don't work in older browsers (Firefox <100, Safari <15.4); no graceful fallback needed for target audience (full-stack engineers, likely modern browsers)

### Decision: Stagger delays (0.3s, 0.4s, 0.5s, etc.) instead of uniform timing
- **Why**: Creates rhythmic reveal that feels choreographed, not random; "surgical precision" direction
- **How**: Each motion.* child gets a unique `delayChildren + index * 0.1s` delay
- **Alternative rejected**: Single unified animation (less personality)

### Decision: Separate CSS module (HeroAdvanced.module.css) instead of inline styles
- **Why**: Avoids specificity collisions, enables @keyframes and @media queries in scoped context, easier to maintain
- **How**: Class names are scoped to module; globals.css provides :root variables (palette, fonts)
- **Gotcha**: CSS Modules don't support `:root` or universal `*` selectors; had to remove `@media (prefers-reduced-motion) { * { animation: none } }` and list specific classes instead

### Decision: Mouse tracking via window mousemove listener
- **Why**: Three.js canvas is absolute-positioned overlay; mousemove coordinates used directly (no coordinate transform needed)
- **How**: Stored in state, passed as props to AdvancedGeometricHero
- **Gotcha**: If canvas is resized, mouse coordinates scale correctly; performance is good (no debounce needed, runs 60fps)

### Gotcha: Three.js particle wrap-around
- Particles at bounds (±5 units) are wrapped to opposite side to create infinite floating effect
- Velocity not reset, so particles continue smoothly across boundary
- Without damping (currently 0.98), particles would accelerate indefinitely near cursor

### Dead code / not used
- `HeroModern.module.css` — replaced by HeroAdvanced.module.css; kept in repo but not imported
- `GeometricHero.tsx` — simpler version, replaced by AdvancedGeometricHero.tsx; kept in repo

## Tech stack (component/Home/two/two.tsx)

Order (as of 2026-06-22):
1. Angular
2. React
3. Nest.js (replaced from Next.js on 2026-06-22)
4. TypeScript
5. Node.js
6. Laravel
7. AWS
8. PostgreSQL
9. Docker
10. Git

Each skill renders as a glassmorphic card with icon, title, and description.

## Related

- `README.md` — Project overview (octgram, Next.js 13 pages router)
- `CLAUDE.md` — Project-specific instructions and conventions
- `package.json` — Dependencies (framer-motion, three, next, etc.)

## How to extend

- **Add more particle effects**: Modify particle buffer attributes (e.g., color, lifetime)
- **Adjust scroll sensitivity**: Change coefficients in `contentY` and `contentOpacity` useTransform ranges
- **Tweak animation timing**: Modify `delayChildren`, `staggerChildren`, `duration` in motion variants
- **Change palette**: Update hex values in globals.css :root and re-derive all tints/shades
- **Add scroll-based shader effects**: Pipe scrollY into additional shader uniforms
