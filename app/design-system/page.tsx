"use client";

import * as React from "react";
import {
  ArrowRight,
  CalendarBlank,
  Lightning,
  WhatsappLogo,
} from "@phosphor-icons/react";
import {
  BrandLogo,
  BtnAgendar,
  BtnMensajes,
  BottomSheet,
  Button,
  CalendarDayCell,
  CalendarNavArrows,
  FaqAccordion,
  InfoCard,
  LogoChip,
  MobileNavDrawer,
  SegmentedToggle,
  ServiceCard,
  SidebarNavLink,
  StatusAlert,
  StatusPill,
  Tag,
  TextInput,
} from "@/components/ui";

const PRIMITIVE_SCALES = [
  {
    name: "Slate",
    prefix: "slate",
    shades: [
      { step: "50", hex: "#F6F5F9" },
      { step: "100", hex: "#E9E8F2" },
      { step: "200", hex: "#D3D2E5" },
      { step: "300", hex: "#B4B2D2" },
      { step: "400", hex: "#8E8BBB" },
      { step: "500", hex: "#6964A5" },
      { step: "600", hex: "#534F87" },
      { step: "700", hex: "#43406E" },
      { step: "800", hex: "#353357" },
      { step: "900", hex: "#292744" },
      { step: "950", hex: "#1A182A" },
    ],
  },
  {
    name: "Blue",
    prefix: "blue",
    shades: [
      { step: "50", hex: "#F2F6FD" },
      { step: "100", hex: "#E1E9FA" },
      { step: "200", hex: "#C2D3F4" },
      { step: "300", hex: "#97B3ED" },
      { step: "400", hex: "#638DE3" },
      { step: "500", hex: "#2F67DA" },
      { step: "600", hex: "#2051B6" },
      { step: "700", hex: "#1A4293" },
      { step: "800", hex: "#153475" },
      { step: "900", hex: "#10295B" },
      { step: "950", hex: "#0A1938" },
    ],
  },
  {
    name: "Teal",
    prefix: "teal",
    shades: [
      { step: "50", hex: "#F0FEFF" },
      { step: "100", hex: "#DCFDFE" },
      { step: "200", hex: "#BAFBFD" },
      { step: "300", hex: "#88F9FC" },
      { step: "400", hex: "#4DF6FA" },
      { step: "500", hex: "#11F3F8" },
      { step: "600", hex: "#06CBD0" },
      { step: "700", hex: "#05A5A9" },
      { step: "800", hex: "#048386" },
      { step: "900", hex: "#036668" },
      { step: "950", hex: "#023F40" },
    ],
  },
  {
    name: "Amber",
    prefix: "amber",
    shades: [
      { step: "50", hex: "#FFF8F0" },
      { step: "100", hex: "#FEEFDC" },
      { step: "200", hex: "#FDDFBA" },
      { step: "300", hex: "#FBC789" },
      { step: "400", hex: "#F9AC4D" },
      { step: "500", hex: "#F79012" },
      { step: "600", hex: "#CF7507" },
      { step: "700", hex: "#A85F06" },
      { step: "800", hex: "#854B04" },
      { step: "900", hex: "#683A03" },
      { step: "950", hex: "#402402" },
    ],
  },
  {
    name: "Red",
    prefix: "red",
    shades: [
      { step: "50", hex: "#FDF2F4" },
      { step: "100", hex: "#F9E1E5" },
      { step: "200", hex: "#F3C3CA" },
      { step: "300", hex: "#EB99A4" },
      { step: "400", hex: "#E16577" },
      { step: "500", hex: "#D7324A" },
      { step: "600", hex: "#B32338" },
      { step: "700", hex: "#911C2D" },
      { step: "800", hex: "#731624" },
      { step: "900", hex: "#5A111C" },
      { step: "950", hex: "#380B11" },
    ],
  },
  {
    name: "Green",
    prefix: "green",
    shades: [
      { step: "50", hex: "#F2FDF8" },
      { step: "100", hex: "#E1F9EF" },
      { step: "200", hex: "#C3F4E0" },
      { step: "300", hex: "#98EBC9" },
      { step: "400", hex: "#65E2AF" },
      { step: "500", hex: "#32D894" },
      { step: "600", hex: "#22B478" },
      { step: "700", hex: "#1C9261" },
      { step: "800", hex: "#16744D" },
      { step: "900", hex: "#115A3C" },
      { step: "950", hex: "#0B3825" },
    ],
  },
];

const SEMANTIC_TOKENS = [
  { token: "color.background.page", value: "#F6F5F2", ref: "Custom" },
  { token: "color.surface.base", value: "#FFFFFF", ref: "White" },
  { token: "color.surface.hover", value: "#F6F5F9", ref: "slate.50" },
  { token: "color.surface.selected", value: "#F2F6FD", ref: "blue.50" },
  { token: "color.surface.disabled", value: "#D3D2E5", ref: "slate.200" },
  { token: "color.text.body", value: "#292744", ref: "slate.900" },
  { token: "color.text.subtle", value: "#534F87", ref: "slate.600" },
  { token: "color.text.muted", value: "#6964A5", ref: "slate.500" },
  { token: "color.text.disabled", value: "#8E8BBB", ref: "slate.400" },
  { token: "color.action.primary", value: "#2051B6", ref: "blue.600" },
  { token: "color.action.primary-hover", value: "#1A4293", ref: "blue.700" },
  { token: "color.action.primary-pressed", value: "#153475", ref: "blue.800" },
  { token: "color.action.focus", value: "#2F67DA", ref: "blue.500" },
  { token: "color.border.default", value: "#D3D2E5", ref: "slate.200" },
  { token: "color.border.strong", value: "#8E8BBB", ref: "slate.400" },
  { token: "color.accent.teal", value: "#06CBD0", ref: "teal.600" },
  { token: "color.accent.amber", value: "#A85F06", ref: "amber.700" },
];

const TYPOGRAPHY_SCALE = [
  {
    name: "Display",
    className: "typo-display",
    spec: "56px / 64px · Bold (700)",
    sample: "Automatización inteligente",
  },
  {
    name: "H1",
    className: "typo-h1",
    spec: "38px / 46px · Bold (700)",
    sample: "Impulsa tu operación con IA",
  },
  {
    name: "H2",
    className: "typo-h2",
    spec: "36px / 44px · Bold (700)",
    sample: "Nuestros Servicios Especializados",
  },
  {
    name: "H3",
    className: "typo-h3",
    spec: "32px / 40px · Bold (700)",
    sample: "Resultados medibles desde el primer mes",
  },
  {
    name: "H4",
    className: "typo-h4",
    spec: "24px / 32px · Bold (700)",
    sample: "Integración continua y soporte dedicado",
  },
  {
    name: "Title",
    className: "typo-title",
    spec: "20px / 28px · SemiBold (600)",
    sample: "Consultoría Estratégica de Procesos",
  },
  {
    name: "Lead",
    className: "typo-lead",
    spec: "18px / 28px · Regular (400)",
    sample:
      "Conectamos tus herramientas actuales para eliminar tareas repetitivas y escalar tu negocio.",
  },
  {
    name: "Body",
    className: "typo-body",
    spec: "16px / 24px · Regular (400)",
    sample:
      "Diseñamos arquitecturas modulares orientadas a resultados con monitoreo en tiempo real.",
  },
  {
    name: "Small",
    className: "typo-small",
    spec: "14px / 20px · SemiBold (600)",
    sample: "Agendar Consultoría · Disponible hoy",
  },
  {
    name: "Caption",
    className: "typo-caption",
    spec: "12px / 16px · SemiBold (600)",
    sample: "Tiempo estimado de implementación: 2 a 4 semanas",
  },
  {
    name: "Micro",
    className: "typo-micro",
    spec: "11px / 16px · SemiBold (600)",
    sample: "DISPONIBLE PARA NUEVOS PROYECTOS",
  },
];

export default function DesignSystemShowcasePage() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState<number>(17);

  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-12">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-8">
        <div className="flex flex-col gap-2">
          <BrandLogo />
          <p className="typo-body text-[var(--color-text-subtle)]">
            Sistema de Diseño & Catálogo de Componentes (Penpot F1–F8 + Utilidades)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusPill label="Disponible para proyectos" tone="teal" />
          <BtnMensajes />
          <BtnAgendar />
        </div>
      </header>

      {/* F1. Colores */}
      <section className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-8">
        <div className="flex flex-col gap-1">
          <span className="typo-micro uppercase tracking-wider text-[var(--color-action-primary)]">
            F1 · Tokens de Color
          </span>
          <h2 className="typo-h3">Paleta Primitiva (01-Primitives) & Semántica (PowerLink)</h2>
        </div>

        <div className="flex flex-col gap-5">
          {PRIMITIVE_SCALES.map((scale) => (
            <div key={scale.name} className="flex flex-col gap-2">
              <span className="typo-small text-[var(--color-text-body)]">
                {scale.name}
              </span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-6 md:grid-cols-11">
                {scale.shades.map((s) => (
                  <div
                    key={s.step}
                    className="flex flex-col overflow-hidden rounded-[8px] border border-[var(--color-border-default)]"
                  >
                    <div
                      className="h-10 w-full"
                      style={{ backgroundColor: s.hex }}
                    />
                    <div className="flex flex-col bg-[var(--color-surface-base)] p-1.5">
                      <span className="font-sans text-[11px] font-semibold text-[var(--color-text-body)]">
                        {s.step}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">
                        {s.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <h3 className="typo-title">Tokens Semánticos (PowerLink)</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {SEMANTIC_TOKENS.map((item) => (
              <div
                key={item.token}
                className="flex items-center gap-3 rounded-[8px] border border-[var(--color-border-default)] bg-[var(--color-background-page)] p-3"
              >
                <span
                  className="size-8 shrink-0 rounded-[6px] border border-[var(--color-border-default)]"
                  style={{ backgroundColor: item.value }}
                />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate font-mono text-[11px] font-semibold text-[var(--color-text-body)]">
                    {item.token}
                  </span>
                  <span className="font-sans text-[11px] text-[var(--color-text-subtle)]">
                    {item.value} ({item.ref})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F2. Tipografía */}
      <section className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-8">
        <div className="flex flex-col gap-1">
          <span className="typo-micro uppercase tracking-wider text-[var(--color-action-primary)]">
            F2 · Tipografía
          </span>
          <h2 className="typo-h3">Outfit — Escala Tipográfica</h2>
        </div>

        <div className="flex flex-col divide-y divide-[var(--color-border-default)]">
          {TYPOGRAPHY_SCALE.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-2 py-4 md:flex-row md:items-baseline md:justify-between"
            >
              <div className="w-48 shrink-0">
                <p className="typo-small text-[var(--color-text-body)]">{t.name}</p>
                <p className="font-mono text-[11px] text-[var(--color-text-subtle)]">
                  {t.spec}
                </p>
              </div>
              <p className={t.className}>{t.sample}</p>
            </div>
          ))}
        </div>
      </section>

      {/* F3. Botones & Utilidades */}
      <section className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-8">
        <div className="flex flex-col gap-1">
          <span className="typo-micro uppercase tracking-wider text-[var(--color-action-primary)]">
            F3 · Botones & Utilidades
          </span>
          <h2 className="typo-h3">Jerarquías, Tamaños y Botones Especiales</h2>
        </div>

        {/* Hierarchies */}
        <div className="flex flex-col gap-3">
          <h3 className="typo-small text-[var(--color-text-subtle)]">
            Jerarquías y Estados (Primary, Secondary, Icon, Disabled)
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Agendar Consultoría</Button>
            <Button
              variant="primary"
              trailingIcon={<ArrowRight weight="bold" className="size-4" />}
            >
              Con Icono
            </Button>
            <Button variant="secondary">hablar por WhatsApp</Button>
            <Button
              variant="secondary"
              leadingIcon={<CalendarBlank weight="regular" className="size-4" />}
            >
              Ver disponibilidad
            </Button>
            <Button variant="icon" aria-label="Acción rápida">
              <Lightning weight="bold" className="size-4" />
            </Button>
            <Button variant="primary" disabled>
              Deshabilitado
            </Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-3">
          <h3 className="typo-small text-[var(--color-text-subtle)]">
            Tamaños (Small 32px · Medium 44px · Large 52px)
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">
              Small (32px)
            </Button>
            <Button variant="primary" size="md">
              Medium (44px)
            </Button>
            <Button variant="primary" size="lg">
              Large (52px)
            </Button>
          </div>
        </div>

        {/* Utilidades */}
        <div className="flex flex-col gap-3">
          <h3 className="typo-small text-[var(--color-text-subtle)]">
            Utilidades (Btn Agendar & Btn Mensajes WhatsApp con hover verde #16734D)
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <BtnAgendar />
            <BtnMensajes />
          </div>
        </div>

        {/* On Dark Background */}
        <div className="flex flex-col gap-3 rounded-[12px] bg-[var(--pl-slate-900)] p-6">
          <span className="typo-caption text-[var(--color-text-inverse)]">
            Variantes sobre fondo oscuro (F8 · On Dark)
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="onDarkPrimary">Agendar Consultoría</Button>
            <Button
              variant="onDarkSecondary"
              leadingIcon={<WhatsappLogo weight="regular" className="size-4" />}
            >
              hablar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* F4. Inputs & Controles */}
      <section className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-8">
        <div className="flex flex-col gap-1">
          <span className="typo-micro uppercase tracking-wider text-[var(--color-action-primary)]">
            F4 · Inputs & Controles
          </span>
          <h2 className="typo-h3">Text Input (5 Estados) & Segmented Toggle</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TextInput
            label="Default"
            placeholder="Ej: Juan Pérez"
          />
          <TextInput
            label="Focus"
            placeholder="Escribiendo..."
            stateOverride="focus"
          />
          <TextInput
            label="Filled"
            defaultValue="carlos@powerlink.ai"
            stateOverride="filled"
          />
          <TextInput
            label="Error"
            defaultValue=""
            placeholder="Correo electrónico"
            error="Este campo es obligatorio"
          />
          <TextInput
            label="Disabled"
            defaultValue="No editable"
            disabled
          />
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[13px] leading-[16px] font-semibold text-[var(--color-text-body)]">
              Toggle segmentado (booking)
            </span>
            <div>
              <SegmentedToggle defaultValue="12h" />
            </div>
          </div>
        </div>
      </section>

      {/* F5. Data Display & F6. Navigation */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* F5 */}
        <section className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-8">
          <div className="flex flex-col gap-1">
            <span className="typo-micro uppercase tracking-wider text-[var(--color-action-primary)]">
              F5 · Data Display
            </span>
            <h2 className="typo-h4">Service Card, Tag, Status Pill & Calendario</h2>
          </div>

          <div className="flex flex-col gap-4">
            <ServiceCard
              title="Desarrollo de Software a Medida"
              description="Construimos aplicaciones web, integraciones API y plataformas escalables adaptadas a tu flujo operativo."
              tags={["React / Next.js", "Node.js", "Cloud Architecture"]}
              defaultExpanded
            />
            <ServiceCard
              title="Automatización de Procesos con IA"
              description="Agentes inteligentes y flujos automatizados para atención, ventas y backoffice."
              tags={["Agentes IA", "CRM Sync", "WhatsApp API"]}
              defaultExpanded={false}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Tag label="Tag Default" />
            <StatusPill label="Confirmado" tone="teal" />
            <StatusPill label="En revisión" tone="amber" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="typo-caption text-[var(--color-text-subtle)]">
              Celdas de calendario (Available · Hover · Selected · Disabled)
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <CalendarDayCell
                day={15}
                state="available"
                selected={selectedDay === 15}
                onClick={() => setSelectedDay(15)}
              />
              <CalendarDayCell
                day={16}
                state="hover"
                selected={selectedDay === 16}
                onClick={() => setSelectedDay(16)}
              />
              <CalendarDayCell
                day={17}
                selected={selectedDay === 17}
                onClick={() => setSelectedDay(17)}
              />
              <CalendarDayCell day={18} state="disabled" />
            </div>
          </div>
        </section>

        {/* F6 & F7 */}
        <section className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-8">
          <div className="flex flex-col gap-1">
            <span className="typo-micro uppercase tracking-wider text-[var(--color-action-primary)]">
              F6 · Navegación & F7 · Alertas y Cards
            </span>
            <h2 className="typo-h4">Sidebar Links, Alertas, FAQ & Info Card</h2>
          </div>

          {/* F6 Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[12px] bg-[var(--color-background-page)] p-4">
            <div className="flex flex-wrap items-center gap-6">
              <SidebarNavLink label="Inicio (Active)" active />
              <SidebarNavLink label="Servicios (Hover)" stateOverride="hover" />
              <SidebarNavLink label="FAQ (Default)" />
            </div>
            <CalendarNavArrows />
          </div>

          {/* F7 Alerts */}
          <div className="flex flex-col gap-2.5">
            <StatusAlert
              variant="error"
              message="Error: No se pudo procesar la solicitud de reserva."
            />
            <StatusAlert
              variant="success"
              message="¡Reserva confirmada! Te enviamos los detalles por correo."
            />
            <StatusAlert
              variant="warning"
              message="Quedan pocos horarios disponibles para esta semana."
            />
            <StatusAlert
              variant="info"
              message="Todas las consultorías incluyen diagnóstico técnico sin costo."
            />
          </div>

          {/* F7 FAQ Accordion */}
          <FaqAccordion
            items={[
              {
                id: "faq-1",
                question: "¿Cuánto tiempo toma implementar una solución?",
                answer:
                  "Dependiendo del alcance, nuestros despliegues iniciales toman entre 2 y 4 semanas con entregas incrementales.",
                defaultOpen: true,
              },
              {
                id: "faq-2",
                question: "¿Se integra con nuestras herramientas actuales?",
                answer:
                  "Sí, conectamos vía API o Webhooks con tu CRM, ERP, WhatsApp Business y bases de datos existentes.",
              },
            ]}
          />

          {/* F7 Info Card */}
          <InfoCard
            title="Diagnóstico 100% Personalizado"
            description="Analizamos tus cuellos de botella operativos y diseñamos una hoja de ruta clara antes de escribir una sola línea de código."
          />
        </section>
      </div>

      {/* F8. Overlays & Extras */}
      <section className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-8">
        <div className="flex flex-col gap-1">
          <span className="typo-micro uppercase tracking-wider text-[var(--color-action-primary)]">
            F8 · Overlays & Extras
          </span>
          <h2 className="typo-h3">Logo Marca, Carrusel de Clientes y Overlays Móviles</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <LogoChip name="ACME Corp" />
          <LogoChip name="Globex" />
          <LogoChip name="Initech" />
          <LogoChip name="Umbrella" />
          <LogoChip name="Stark Ind" />
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
            Abrir Mobile Nav Drawer
          </Button>
          <Button variant="primary" onClick={() => setSheetOpen(true)}>
            Abrir Bottom Sheet (Modal Mobile)
          </Button>
        </div>
      </section>

      {/* Interactive Overlays */}
      <MobileNavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <BottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title="Hablemos por WhatsApp"
        subtitle="Completa tus datos para iniciar la conversación con un especialista."
      >
        <div className="flex flex-col gap-4">
          <TextInput
            label="Nombre completo"
            placeholder="Ej: Carlos Jiménez"
            containerClassName="max-w-none"
          />
          <TextInput
            label="Empresa"
            placeholder="Ej: PowerLink"
            containerClassName="max-w-none"
          />
          <BtnMensajes className="w-full" label="Iniciar chat en WhatsApp" />
        </div>
      </BottomSheet>
    </main>
  );
}
