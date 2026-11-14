"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ============================================================================
   F8. OVERLAYS & EXTRAS — Logo / Marca (BrandLogo)
   Penpot spec: 144x36px PowerLink brand mark exported from Penpot shape
   8e134180-ff6c-805d-8008-ee3825a8f90c.
   ============================================================================ */
export interface BrandLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function BrandLogo({
  width = 144,
  height = 36,
  className,
}: BrandLogoProps) {
  return (
    <div
      data-slot="brand-logo"
      className={cn("inline-flex items-center select-none", className)}
    >
      <Image
        src="/logo.png"
        alt="PowerLink"
        width={width}
        height={height}
        priority
        className="h-auto w-auto object-contain"
      />
    </div>
  );
}

/* ============================================================================
   F8. OVERLAYS & EXTRAS — Logo Chip (carrusel de clientes)
   Penpot spec: bg #FFFFFF, border 1px solid #3C3962 @ 10% opacity, radius 12px,
   pad 8px 16px, gap 6px, 6x6px dot #2862D9 (optional) + 14px-15px extrabold (800) text.
   ============================================================================ */
export interface LogoChipProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  dotColor?: string;
  showDot?: boolean;
}

export function LogoChip({
  name,
  dotColor = "#2862D9",
  showDot = false,
  className,
  ...props
}: LogoChipProps) {
  return (
    <div
      data-slot="logo-chip"
      className={cn(
        "inline-flex h-[33px] shrink-0 items-center justify-center gap-[6px] rounded-[12px] border border-[#3C3962]/10 bg-[var(--color-surface-base)] px-4 py-2",
        className
      )}
      {...props}
    >
      {showDot && (
        <span
          aria-hidden="true"
          className="inline-block size-[6px] shrink-0 rounded-full"
          style={{ backgroundColor: dotColor }}
        />
      )}
      <span className="font-sans text-[14px] leading-[17px] font-extrabold text-[#3C3962]">
        {name}
      </span>
    </div>
  );
}

/* ============================================================================
   F8. OVERLAYS & EXTRAS — Mobile Nav Drawer (Drawer Panel — nav mobile)
   Penpot spec (Landing Page board 8e134180-ff6c-805d-8008-ee28266d3310):
   Overlay rgba(60, 57, 98, 0.48) + 280px side panel, pad 24px 20px, gap 28px,
   header ("PowerLink" 18px/800 + 32x32 #F4F4F8 close button),
   navList (240px items, 42px height, active item has #EBF1FF bg + 6x6 #3B7AFF dot + 15px/700 #3B7AFF text),
   bottom full-width CTA button "Agendar Consultoría".
   ============================================================================ */
export interface MobileNavDrawerItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
  items?: MobileNavDrawerItem[];
  activeHref?: string;
  onSelectItem?: (href: string) => void;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const DEFAULT_NAV_ITEMS: MobileNavDrawerItem[] = [
  { label: "Inicio", href: "#inicio", active: true },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export function MobileNavDrawer({
  open,
  onClose,
  items = DEFAULT_NAV_ITEMS,
  activeHref,
  onSelectItem,
  ctaLabel = "Agendar Consultoría",
  onCtaClick,
}: MobileNavDrawerProps) {
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          data-slot="mobile-nav-drawer"
          className="fixed inset-0 z-[var(--z-modal)] flex"
        >
          {/* Backdrop overlay */}
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 bg-[#3C3962]/48 backdrop-blur-[1.5px]"
          />

          {/* Drawer Panel (280px) */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-full w-[280px] max-w-[85vw] flex-col gap-7 bg-[#FFFFFF] px-5 py-6 shadow-xl"
          >
            {/* Header */}
            <div className="flex h-8 items-center justify-between">
              <span className="font-sans text-[18px] leading-[22px] font-extrabold text-[#3C3962]">
                PowerLink
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={onClose}
                className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-[#F4F4F8] text-[#3C3962] transition-colors hover:bg-[#E9E8F2] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
              >
                <X weight="bold" className="size-4" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {items.map((item) => {
                const isActive = activeHref
                  ? activeHref === item.href
                  : Boolean(item.active);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      onSelectItem?.(item.href);
                      onClose();
                    }}
                    className={cn(
                      "flex h-[42px] w-full items-center gap-[10px] rounded-[8px] px-3 py-3 font-sans text-[15px] leading-[18px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]",
                      isActive
                        ? "bg-[#EBF1FF] font-bold text-[#3B7AFF]"
                        : "bg-transparent font-medium text-[#64618A] hover:bg-[#F6F5F9] hover:text-[#3C3962]"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "inline-block size-[6px] shrink-0 rounded-full",
                        isActive ? "bg-[#3B7AFF]" : "bg-transparent"
                      )}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Bottom CTA */}
            <div className="mt-auto pt-4">
              <Button
                variant="primary"
                size="md"
                className="h-[41px] w-full bg-[#2862D9]"
                onClick={() => {
                  onClose();
                  onCtaClick?.();
                }}
              >
                {ctaLabel}
              </Button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================================
   F8. OVERLAYS & EXTRAS — Bottom Sheet (Mobile Modal)
   Penpot spec (8e134180-ff6c-805d-8008-ee2874303797 & 9148af2b-372b-80ea-8008-f0cf1ceb42b1):
   Bottom-anchored sheet with top radius 20px, drag handle bar (#8A88A3), header with title + close,
   and body slot.
   ============================================================================ */
export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function BottomSheet({
  open,
  onClose,
  title,
  subtitle,
  children,
  className,
}: BottomSheetProps) {
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="bottom-sheet-title"
          data-slot="bottom-sheet"
          className="fixed inset-0 z-[var(--z-modal)] flex flex-col justify-end"
        >
          {/* Backdrop overlay */}
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 bg-[#3C3962]/48 backdrop-blur-[1.5px]"
          />

          {/* Sheet container */}
          <motion.div
            initial={{ y: "100%", opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative z-10 mx-auto flex max-h-[90vh] w-full max-w-[480px] flex-col gap-[18px] rounded-t-[20px] bg-[#FFFFFF] px-5 pb-7 pt-3 shadow-2xl",
              className
            )}
          >
            {/* Drag handle */}
            <div className="flex justify-center">
              <span
                aria-hidden="true"
                className="h-[4px] w-[40px] rounded-full bg-[#8A88A3]"
              />
            </div>

            {/* Sheet Header */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <h2
                  id="bottom-sheet-title"
                  className="font-sans text-[18px] leading-[22px] font-bold text-[#3C3962]"
                >
                  {title}
                </h2>
                {subtitle && (
                  <p className="font-sans text-[12px] leading-[15px] font-medium text-[#9490B3]">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                aria-label="Cerrar ventana"
                onClick={onClose}
                className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#F4F4F8] text-[#3C3962] hover:bg-[#E9E8F2] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
              >
                <X weight="bold" className="size-4" />
              </button>
            </div>

            {/* Sheet Body */}
            <div className="overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
