"use client";

import * as React from "react";
import Image from "next/image";
import { Code, List, WhatsappLogo } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  BtnAgendar,
  BtnMensajes,
  FaqAccordionRow,
  LogoChip,
  MobileNavDrawer,
  SidebarNavLink,
  Tag,
} from "@/components/ui";
import { ReservaModal, WhatsAppModal } from "@/components/landing/modals";

/* ============================================================================
   PENPOT DATA — Exact copy, colors, and tags from `Landing Root` & `Landing Root - Mobile`
   ============================================================================ */
const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

const CLIENT_CHIPS = [
  "Cliente A",
  "Cliente B",
  "Cliente C",
  "Cliente D",
  "Cliente E",
];

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: string;
  titleSizeDesktop: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    description:
      "Sitios y plataformas web rápidas, escalables y optimizadas para conversión.",
    tags: [
      "Landing Pages",
      "E-commerce",
      "Portales Web",
      "SEO Técnico",
      "CMS",
    ],
    accentColor: "#3B7AFF",
    titleSizeDesktop: "text-[18px] leading-[22px]",
  },
  {
    id: "aplicaciones-a-medida",
    title: "Aplicaciones a Medida",
    description:
      "Apps móviles y de escritorio diseñadas para resolver problemas reales de tu operación.",
    tags: [
      "iOS & Android",
      "Apps Internas",
      "Integraciones API",
      "Automatización",
      "Cloud",
    ],
    accentColor: "#05A8AC",
    titleSizeDesktop: "text-[16px] leading-[20px]",
  },
  {
    id: "analisis-de-datos",
    title: "Análisis de Datos",
    description:
      "Convertimos tus datos en decisiones: dashboards, reportes y modelos predictivos.",
    tags: [
      "Dashboards",
      "Business Intelligence",
      "Data Pipelines",
      "Visualización",
      "IA & ML",
    ],
    accentColor: "#05A8AC",
    titleSizeDesktop: "text-[16px] leading-[20px]",
  },
  {
    id: "diseno",
    title: "Diseño",
    description:
      "Branding, UX/UI y sistemas de diseño que elevan la percepción de tu marca.",
    tags: ["UX/UI", "Branding", "Design Systems", "Prototipado", "Research"],
    accentColor: "#05A8AC",
    titleSizeDesktop: "text-[16px] leading-[20px]",
  },
];

const FAQ_DATA = [
  {
    id: "faq-0",
    question:
      "¿Qué pasa si mi negocio es pequeño y solo necesito una función específica?",
    answer:
      "Adaptamos el alcance a tu etapa actual. Podemos desarrollar desde un módulo puntual o MVP funcional hasta una plataforma integral, creciendo a medida que tu operación lo requiera.",
  },
  {
    id: "faq-1",
    question: "¿El código y la propiedad intelectual son 100% de mi empresa?",
    answer:
      "Sí. Al finalizar el proyecto entregamos el repositorio completo, accesos de infraestructura y total titularidad sobre el código fuente y activos diseñados.",
  },
  {
    id: "faq-2",
    question: "¿Cómo garantizan tiempos de entrega rápidos sin perder calidad?",
    answer:
      "Trabajamos con arquitectura modular y entregas continuas cada 48 a 72 horas para que puedas validar avances reales en un entorno de pruebas desde la primera semana.",
  },
  {
    id: "faq-3",
    question: "¿Qué tecnologías utilizan en el desarrollo?",
    answer:
      "Utilizamos stacks modernos y probados en la industria: Next.js, React, TypeScript, Node.js, Python, bases de datos SQL/NoSQL e infraestructura cloud escalable.",
  },
];

export default function PowerLinkLandingPage() {
  const [activeNav, setActiveNav] = React.useState<string>("#inicio");
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [reservaOpen, setReservaOpen] = React.useState<boolean>(false);
  const [whatsappOpen, setWhatsappOpen] = React.useState<boolean>(false);

  // Client carousel offset (shows 3 chips at a time as in Penpot `Carousel Stage`)
  const [clientIndex, setClientIndex] = React.useState<number>(0);

  // Desktop Services Accordion open state (all 4 open by default as in Penpot `Landing Root`)
  const [openServices, setOpenServices] = React.useState<Record<string, boolean>>({
    "desarrollo-web": true,
    "aplicaciones-a-medida": true,
    "analisis-de-datos": true,
    diseno: true,
  });

  const toggleService = (id: string) => {
    setOpenServices((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNextClients = () => {
    setClientIndex((prev) => (prev + 1) % CLIENT_CHIPS.length);
  };

  const visibleClients = [
    CLIENT_CHIPS[clientIndex % CLIENT_CHIPS.length],
    CLIENT_CHIPS[(clientIndex + 1) % CLIENT_CHIPS.length],
    CLIENT_CHIPS[(clientIndex + 2) % CLIENT_CHIPS.length],
  ];

  return (
    <div className="min-h-screen w-full bg-[#F6F5F2] text-[#3C3962] lg:flex lg:items-start">
      {/* ====================================================================
         DESKTOP SIDEBAR (`Sidebar` 240px x 900px sticky left)
         ==================================================================== */}
      <aside
        aria-label="Barra lateral de navegación"
        className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[240px] lg:shrink-0 lg:flex-col lg:justify-between lg:border-r lg:border-[#3C3962]/10 lg:bg-[#FFFFFF] lg:p-8"
      >
        <div className="flex flex-col gap-[56px]">
          {/* Logo Row (144x36) */}
          <a
            href="#inicio"
            onClick={() => setActiveNav("#inicio")}
            className="inline-flex items-center gap-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF] rounded-[8px]"
          >
            <Image
              src="/logo-icon.png"
              alt="PowerLink Logo"
              width={36}
              height={36}
              priority
              className="size-9 shrink-0 rounded-[12px] object-cover"
            />
            <span className="font-sans text-[20px] leading-[24px] font-bold text-[#3C3962]">
              PowerLink
            </span>
          </a>

          {/* Nav Links */}
          <nav className="flex flex-col gap-4" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <SidebarNavLink
                key={item.href}
                label={item.label}
                href={item.href}
                active={activeNav === item.href}
                onClick={() => setActiveNav(item.href)}
              />
            ))}
          </nav>
        </div>
      </aside>

      {/* ====================================================================
         MOBILE TOP BAR (`Top Bar - Mobile` 375x64 sticky top)
         ==================================================================== */}
      <header className="sticky top-0 z-30 flex h-[64px] w-full items-center justify-between border-b border-[#E4E3EC] bg-[#FFFFFF] px-4 lg:hidden">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="inline-flex size-8 cursor-pointer items-center justify-center rounded-[6px] text-[#3C3962] hover:bg-[#F6F5F9] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
          >
            <List weight="bold" className="size-[22px]" />
          </button>
          <a
            href="#inicio"
            className="font-sans text-[18px] leading-[22px] font-extrabold text-[#3C3962]"
          >
            PowerLink
          </a>
        </div>

        {/* WhatsApp Button - TopBar (40x40 #2862D9 circle) */}
        <button
          type="button"
          aria-label="Chatear por WhatsApp"
          onClick={() => setWhatsappOpen(true)}
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#2862D9] text-[#FFFFFF] transition-colors hover:bg-[#1A4293] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
        >
          <WhatsappLogo weight="regular" className="size-5" />
        </button>
      </header>

      {/* ====================================================================
         MAIN CONTENT COLUMN (`Main Content` 1200px container on Desktop)
         ==================================================================== */}
      <div className="flex min-w-0 flex-1 flex-col items-center">
        {/* Desktop Top Actions (`Top Actions` 1200x89) */}
        <header className="hidden w-full max-w-[1200px] items-start justify-end gap-3 p-6 lg:flex">
          <BtnMensajes
            onClick={() => setWhatsappOpen(true)}
            className="h-[41px] border-[#E4E3EC] px-4 py-2 text-[12px]"
          />
          <BtnAgendar
            onClick={() => setReservaOpen(true)}
            className="h-[41px] bg-[#2862D9] px-6 py-3 text-[14px]"
          />
        </header>

        {/* ==================================================================
           HERO SECTION (`Hero Section` 963px Desktop / `Hero - Mobile` 375px)
           ================================================================== */}
        <section
          id="inicio"
          className="flex w-full max-w-[963px] flex-col items-start gap-5 px-5 pb-10 pt-8 lg:gap-8 lg:px-8 lg:pb-12 lg:pt-24"
        >
          {/* Hero Title Block */}
          <div className="flex w-full max-w-[880px] flex-col items-start gap-5 lg:gap-6">
            <h1 className="font-sans text-[32px] leading-[1.2] font-bold text-[#3C3962] lg:text-[54px] lg:leading-[1.12]">
              Soluciones Digitales para Cada Desafío de tu Negocio.
            </h1>
            <p className="max-w-[780px] font-sans text-[16px] leading-[1.35] font-normal text-[#64618A] lg:text-[18px] lg:leading-[1.6]">
              Diseñamos y desarrollamos sitios web, aplicaciones, análisis de
              datos y experiencias digitales a medida. Desde PyMEs en
              crecimiento hasta corporativos consolidados.
            </p>
          </div>

          {/* Hero Buttons (`Btn Construir` - "Cotizar mi Software") */}
          <div className="flex items-center lg:pt-8">
            <button
              type="button"
              onClick={() => setReservaOpen(true)}
              className="inline-flex h-[41px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2862D9] px-6 py-3 font-sans text-[14px] leading-[17px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1A4293] active:bg-[#153475] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
            >
              <Code weight="bold" className="size-4 shrink-0" />
              <span>Cotizar mi Software</span>
            </button>
          </div>

          {/* Trust Bar (Mobile puts caption above carousel; Desktop puts carousel -> divider -> caption) */}
          <div className="flex w-full max-w-[896px] flex-col items-start gap-4 pt-2 lg:gap-5 lg:pt-8">
            {/* Mobile Caption (above carousel on mobile) */}
            <p className="font-sans text-[11px] leading-[14px] font-bold uppercase tracking-wide text-[#9490B3] lg:hidden">
              EMPRESAS Y EQUIPOS QUE CONFÍAN EN NUESTRO TRABAJO
            </p>

            {/* Carousel Stage */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {visibleClients.map((clientName) => (
                  <LogoChip key={clientName} name={clientName} />
                ))}
              </div>
              <button
                type="button"
                aria-label="Ver siguientes clientes"
                onClick={handleNextClients}
                className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E4E3EC] bg-[#FFFFFF] font-sans text-[18px] font-bold text-[#3C3962] transition-colors hover:border-[#8E8BBB] hover:bg-[#F6F5F9] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
              >
                ›
              </button>
            </div>

            {/* Desktop Divider + Caption */}
            <div className="hidden h-px w-full bg-[#3C3962]/12 lg:block" />
            <p className="hidden font-sans text-[12px] leading-[15px] font-semibold uppercase tracking-wide text-[#9490B3] lg:block">
              EMPRESAS Y EQUIPOS QUE CONFÍAN EN NUESTRO TRABAJO
            </p>
          </div>
        </section>

        {/* ==================================================================
           SERVICES SECTION (`Services Section` 896px Desktop / `Services - Mobile`)
           ================================================================== */}
        <section
          id="soluciones"
          className="flex w-full max-w-[896px] flex-col items-start gap-5 px-5 py-10 lg:gap-8 lg:px-8 lg:py-16"
        >
          {/* Services Header */}
          <div className="flex w-full max-w-[832px] flex-col items-start gap-2">
            <h2 className="max-w-[700px] font-sans text-[24px] leading-[1.2] font-bold text-[#3C3962] lg:text-[38px]">
              <span className="lg:hidden">Soluciones para cada necesidad</span>
              <span className="hidden lg:inline">
                Soluciones para cada necesidad de tu negocio
              </span>
            </h2>
            <p className="hidden max-w-[576px] font-sans text-[16px] leading-[1.35] font-normal text-[#64618A] lg:block">
              Combinamos disciplinas para resolver tu problema de punta a punta.
              Entregas continuas cada 48 a 72 horas.
            </p>
          </div>

          {/* Mobile Services List (Individual rounded-12 cards) */}
          <div className="flex w-full flex-col gap-5 lg:hidden">
            {SERVICES_DATA.map((service) => (
              <article
                key={service.id}
                className="flex w-full flex-col gap-3 rounded-[12px] border border-[#E4E3EC] bg-[#FFFFFF] p-5"
              >
                <h3 className="font-sans text-[17px] leading-[21px] font-bold text-[#3C3962]">
                  {service.title}
                </h3>
                <p className="font-sans text-[13px] leading-[16px] font-normal text-[#64618A]">
                  {service.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {service.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Desktop Services Accordion (Unified 832px container with 1px #3C3962/12 border and r-16) */}
          <div className="hidden w-full max-w-[832px] flex-col overflow-hidden rounded-[16px] border border-[#3C3962]/12 bg-[#FFFFFF] lg:flex">
            {SERVICES_DATA.map((service, idx) => {
              const isOpen = Boolean(openServices[service.id]);
              return (
                <React.Fragment key={service.id}>
                  {idx > 0 && (
                    <div className="h-px w-full bg-[#3C3962]/12" />
                  )}
                  <div className="flex w-full flex-col gap-4 p-7">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleService(service.id)}
                      className="flex w-full cursor-pointer items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF] rounded-[4px]"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-block size-5 shrink-0 rounded-full border-[1.8px]"
                          style={{ borderColor: service.accentColor }}
                        />
                        <span
                          className={cn(
                            "font-sans font-bold text-[#3C3962]",
                            service.titleSizeDesktop
                          )}
                        >
                          {service.title}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-sans text-[18px] leading-[22px] font-bold select-none"
                        style={{ color: service.accentColor }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <>
                        <p className="max-w-[720px] font-sans text-[14px] leading-[17px] font-normal text-[#64618A]">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {service.tags.map((tag) => (
                            <Tag key={tag} label={tag} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* ==================================================================
           FAQ SECTION (`FAQ Section` 896px Desktop / `FAQ - Mobile` white bg)
           ================================================================== */}
        <section
          id="preguntas"
          className="flex w-full justify-center bg-[#FFFFFF] lg:bg-transparent"
        >
          <div className="flex w-full max-w-[896px] flex-col items-start gap-4 px-5 py-10 lg:gap-8 lg:px-8 lg:py-16">
            {/* FAQ Header */}
            <div className="flex w-full max-w-[832px] flex-col items-start gap-2">
              <h2 className="font-sans text-[24px] leading-[1.2] font-bold text-[#3C3962] lg:text-[36px]">
                Preguntas Frecuentes
              </h2>
              <p className="hidden font-sans text-[16px] leading-[1.2] font-normal text-[#64618A] lg:block">
                Todo lo que necesitas saber sobre cómo trabajamos.
              </p>
              <button
                type="button"
                onClick={() => setWhatsappOpen(true)}
                className="mt-1 hidden cursor-pointer items-center justify-center rounded-full border border-[#3C3962]/15 bg-[#FFFFFF] px-4 py-2 font-sans text-[12px] leading-[15px] font-semibold text-[#3C3962] transition-colors hover:bg-[#F6F5F9] lg:inline-flex outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
              >
                ¿Tienes otra consulta? Habla con un especialista
              </button>
            </div>

            {/* FAQ Accordion List */}
            <div className="flex w-full max-w-[832px] flex-col border-t border-[#3C3962]/14">
              {FAQ_DATA.map((faq) => (
                <FaqAccordionRow
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  className="border-b border-[#3C3962]/12"
                />
              ))}

              {/* Desktop Discovery Call Row */}
              <button
                type="button"
                onClick={() => setReservaOpen(true)}
                className="hidden w-full cursor-pointer items-center justify-between py-5 text-left font-sans text-[15px] leading-[18px] font-medium text-[#64618A] transition-colors hover:text-[#3C3962] lg:flex outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF] rounded-[4px]"
              >
                <span>
                  ¿Listo para comenzar tu proyecto? Agenda tu Discovery Call
                </span>
                <span className="font-sans text-[18px] leading-[22px] font-semibold">
                  →
                </span>
              </button>
            </div>

            {/* Mobile Discovery Call Card (`faq-cta-m`) */}
            <button
              type="button"
              onClick={() => setReservaOpen(true)}
              className="mt-2 flex w-full cursor-pointer items-center justify-between rounded-[12px] bg-[#F6F5F2] p-4 text-left lg:hidden outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
            >
              <span className="max-w-[260px] font-sans text-[13px] leading-[16px] font-semibold text-[#3C3962]">
                ¿Listo para comenzar tu proyecto? Agenda tu Discovery Call
              </span>
              <span className="font-sans text-[18px] leading-[22px] font-bold text-[#3B7AFF]">
                →
              </span>
            </button>
          </div>
        </section>

        {/* ==================================================================
           CONTACTO SECTION (`Contacto Section` #3C3962 full-width dark banner)
           ================================================================== */}
        <section
          id="contacto"
          className="flex w-full flex-col items-center justify-center gap-5 bg-[#3C3962] px-6 py-12 text-center lg:gap-6 lg:px-16 lg:py-20"
        >
          <h2 className="max-w-[490px] font-sans text-[24px] leading-[1.2] font-bold text-[#FFFFFF] lg:text-[32px]">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="max-w-[520px] font-sans text-[14px] leading-[1.35] font-normal text-[#9490B3] lg:text-[16px]">
            Contanos qué necesitás y te armamos una propuesta a medida, sin
            compromiso.
          </p>
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-4">
            {/* Btn Cotizar - Contacto */}
            <button
              type="button"
              onClick={() => setReservaOpen(true)}
              className="inline-flex h-[41px] min-w-[195px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFFFFF] px-6 py-3 font-sans text-[14px] leading-[17px] font-semibold text-[#3C3962] transition-colors hover:bg-[#F6F5F9] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
            >
              <Code weight="bold" className="size-4 shrink-0" />
              <span>Cotizar mi Proyecto</span>
            </button>

            {/* Btn WhatsApp - Contacto */}
            <button
              type="button"
              onClick={() => setWhatsappOpen(true)}
              className="inline-flex h-[41px] min-w-[213px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 font-sans text-[14px] leading-[17px] font-semibold text-[#FFFFFF] transition-colors hover:border-white/50 hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
            >
              <WhatsappLogo weight="regular" className="size-4 shrink-0" />
              <span>Hablar por WhatsApp</span>
            </button>
          </div>
        </section>

        {/* ==================================================================
           FOOTER (`Footer` Desktop & `Footer - Mobile`)
           ================================================================== */}
        <footer className="flex w-full justify-center bg-[#FFFFFF] px-5 pb-8 pt-10 lg:border-t lg:border-[#3C3962]/12 lg:px-8 lg:pb-12 lg:pt-14">
          <div className="flex w-full max-w-[896px] flex-col gap-7 lg:gap-6">
            <div className="hidden h-px w-full bg-[#3C3962]/8 lg:block" />

            {/* Footer Brand */}
            <div className="flex flex-col items-start gap-3 lg:gap-5">
              {/* Desktop shows 32x32 rounded-8 logo icon; Mobile shows "PowerLink" 20px/800 */}
              <div className="hidden lg:flex lg:items-center lg:gap-2">
                <Image
                  src="/logo-icon.png"
                  alt="PowerLink"
                  width={32}
                  height={32}
                  className="size-8 rounded-[8px] object-cover"
                />
              </div>
              <span className="font-sans text-[20px] leading-[24px] font-extrabold text-[#3C3962] lg:hidden">
                PowerLink
              </span>

              <p className="max-w-[340px] font-sans text-[13px] leading-[1.35] font-normal text-[#64618A] lg:text-[14px] lg:leading-[1.5]">
                Agencia de desarrollo digital: webs, aplicaciones, análisis de
                datos y diseño. Soluciones a medida para negocios modernos.
              </p>
            </div>

            {/* Footer Legal */}
            <div className="flex flex-col items-start justify-between gap-2 pt-4 lg:flex-row lg:items-center">
              <p className="font-sans text-[11px] leading-[14px] font-normal text-[#9490B3]">
                © 2026 PowerLink .TECH. Todos los derechos reservados.
              </p>
              <div className="flex flex-wrap items-center gap-4 font-sans text-[11px] leading-[14px] font-medium text-[#9490B3] lg:font-normal">
                <a
                  href="#privacidad"
                  className="transition-colors hover:text-[#3C3962]"
                >
                  Política de Privacidad
                </a>
                <a
                  href="#terminos"
                  className="transition-colors hover:text-[#3C3962]"
                >
                  Términos del Servicio
                </a>
                <a
                  href="#contacto"
                  className="transition-colors hover:text-[#3C3962]"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* ====================================================================
         OVERLAYS & MODALS (Mobile Nav Drawer, Reserva Modal, WhatsApp Modal)
         ==================================================================== */}
      <MobileNavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={NAV_ITEMS}
        activeHref={activeNav}
        onSelectItem={(href) => setActiveNav(href)}
        ctaLabel="Agendar Consultoría"
        onCtaClick={() => setReservaOpen(true)}
      />

      <ReservaModal
        open={reservaOpen}
        onClose={() => setReservaOpen(false)}
      />

      <WhatsAppModal
        open={whatsappOpen}
        onClose={() => setWhatsappOpen(false)}
      />
    </div>
  );
}
