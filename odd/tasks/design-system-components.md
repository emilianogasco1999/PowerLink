# Design System Tokens, Typography & Components
Status: completed
Branch: main

## Specs
- S1: Replicate `F1. Colores` tokens from Penpot (`01-Primitives`: `slate`, `blue`, `teal`, `amber`, `red`, `green` `50`–`950`; `PowerLink` semantic tokens: `color.background.page`, `color.surface.*`, `color.text.*`, `color.action.*`, `color.border.*`, `color.status.*-bg`, `color.booking.*`, `color.accent.*`, `radius.*`, `space.*`, `size.*`, `motion.duration.*`, `z-index.*`, `breakpoint.*`).
- S2: Replicate `F2. Tipografía` using Google Font `Outfit` (`400`, `500`, `600`, `700`, `800`) and typography scale (`display`, `h1`, `h2`, `h3`, `h4`, `title`, `lead`, `body`, `small`, `caption`, `micro`).
- S3: Replicate `F3. Botones` and `Utilidades` (`Button` with hierarchies `primary`, `secondary`, `icon`, `onDarkPrimary`, `onDarkSecondary`, sizes `sm`, `md`, `lg`, states `default`, `hover`, `pressed`, `focus`, `disabled`, plus `BtnAgendar` and `BtnMensajes` WhatsApp button).
- S4: Replicate `F4. Inputs & Controles` (`TextInput` with `Default`, `Focus`, `Filled`, `Error` `"Este campo es obligatorio"`, `Disabled` states, and `SegmentedToggle` for `"12 h"` / `"24hs"` booking time format).
- S5: Replicate `F5. Data Display` (`ServiceCard` collapsible card with tags, `Tag`, `StatusPill`, and `CalendarDayCell` with `available`, `hover`, `selected`, `disabled` states).
- S6: Replicate `F6. Navigation` (`SidebarNavLink` with `default`, `hover`, `active` states and `CalendarNavArrows`).
- S7: Replicate `F7. Alertas & Cards` (`StatusAlert` for `error`, `success`, `warning`, `info`, `FaqAccordionRow` / `FaqAccordion`, and `InfoCard`).
- S8: Replicate `F8. Overlays & Extras` (`BrandLogo`, `LogoChip` client carousel chips, `MobileNavDrawer`, and `BottomSheet`).

## Tasks
- [x] T1 (S1, S2): Configure `Outfit` font in `app/layout.tsx` and define all primitive + semantic tokens and typography scale in `app/globals.css` (route: inline)
- [x] T2 (S3, S4): Implement `F3. Botones` + `Utilidades` (`components/ui/button.tsx`) and `F4. Inputs & Controles` (`components/ui/input.tsx`, `components/ui/segmented-toggle.tsx`) (route: inline)
- [x] T3 (S5, S6, S7, S8): Implement `F5. Data Display`, `F6. Navigation`, `F7. Alertas & Cards`, `F8. Overlays & Extras`, barrel export `components/ui/index.ts`, and visual showcase in `app/page.tsx` (route: inline)

## Log
- L1: "bien, ahora que ya tenemos conexion y tenemos un initial commit, necesito crear todos los componente en mi app. Colores, componentes, fuentes, etc, todo se debe replicar en mi web. Puedes obtener los componentes?"
- L2: "de momento solo los tokens, tipografias y componentes"
