# PowerLink Landing Page (Desktop + Mobile + Modals)
Status: completed
Branch: main

## Specs
- S1: Implement Desktop Sidebar (`240px`, sticky, `PowerLink` logo + `Inicio`, `Soluciones`, `Preguntas`, `Contacto` nav links) and Desktop Top Actions (`Whatsapp` + `Agendar Consultoría`), plus Mobile Top Bar (`64px`, hamburger button + `PowerLink` + circular `#2862D9` WhatsApp button) and Mobile Nav Drawer (`280px` panel with `#EBF1FF` active pill and bottom `"Agendar Consultoría"` CTA).
- S2: Implement Hero Section (`#inicio`) for Desktop (`54px` title) and Mobile (`32px` title) with subtitle, `"Cotizar mi Software"` primary CTA button, and interactive Client Logo Carousel (`Cliente A`, `Cliente B`, `Cliente C` + `›` next button) with `"EMPRESAS Y EQUIPOS QUE CONFÍAN EN NUESTRO TRABAJO"` caption.
- S3: Implement Services Section (`#soluciones`) with 4 services (`Desarrollo Web`, `Aplicaciones a Medida`, `Análisis de Datos`, `Diseño` and their exact descriptions and tags): rendered as the unified collapsible `Services Accordion` card (`rounded-[16px] border-[#3C3962]`) on Desktop and individual `Service Card - Mobile` cards (`rounded-[12px] border-[#E4E3EC]`) on Mobile.
- S4: Implement FAQ Section (`#preguntas`) with header, `"¿Tienes otra consulta? Habla con un especialista"` button on Desktop, the 4 collapsible FAQ questions, and the bottom `"¿Listo para comenzar tu proyecto? Agenda tu Discovery Call →"` CTA row/box.
- S5: Implement Contacto Section (`#contacto` dark `#3C3962` banner with `"¿Listo para empezar tu proyecto?"`, `"Cotizar mi Proyecto"`, and `"Hablar por WhatsApp"`) and Footer (`PowerLink` brand info, copyright `"© 2026 PowerLink .TECH. Todos los derechos reservados."`, and legal links).
- S6: Implement interactive Reserva Modal (Desktop 3-column `1024px` modal card + Mobile bottom sheet with `Equipo @ PowerLink`, `Sesión de Consultoría`, `30m / Google Meet / America/Buenos Aires`, `noviembre 2026` calendar / mobile `dayStrip`, `12 h / 24hs` segmented toggle, and `16:30`–`19:30` time slots) and WhatsApp Modal (Desktop `440px` card + Mobile bottom sheet with `Chateá con nosotros`, `HORARIOS DE ATENCIÓN`, `TIEMPO DE RESPUESTA ESTIMADO`, and `"Abrir WhatsApp"` CTA).
- S7: Align border opacities with Penpot `strokeOpacity` (`Sidebar` & `LogoChip` `#3C3962/10`, `Services Accordion`, `Tag`, & `Footer` `#3C3962/12`, `Btn Especialista` `#3C3962/15`, `Btn WhatsApp - Contacto` & `Button / OnDark / Secondary` `white/30`) and add smooth entry/exit modal & drawer transitions using `motion` (`AnimatePresence` + `motion.div`/`motion.aside`).

## Tasks
- [x] T1 (S1, S6): Create `ReservaModal` and `WhatsAppModal` (responsive Desktop modal + Mobile bottom sheet) and preserve the component catalog at `/design-system` (route: inline)
- [x] T2 (S1, S2, S3, S4, S5): Implement the complete responsive Desktop + Mobile Landing Page in `app/page.tsx` and verify production build (route: inline)
- [x] T3 (S3, S6, S7): Align border opacities with Penpot `strokeOpacity` values and add smooth `motion/react` entry/exit animations to modals and drawers (route: inline)

## Log
- L1: "excelente, ahora que tenemos los componentes podriamos realizar el desarrollo de la landing page? Ten en cuenta la vista desktop + mobile"
- L2: "la tonalidad de bordes es mas clara en el diseño. Me gustaria agregar animacion o una transicion mas sutil al momento de abrir un modal (puedes utilizar algun tipo de libreria)"
