"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Clock, WhatsappLogo, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { CalendarNavArrows, SegmentedToggle } from "@/components/ui";

/* ============================================================================
   WHATSAPP MODAL (Desktop 440px Card + Mobile Bottom Sheet)
   Penpot boards:
   - Desktop: `WhatsApp Modal - Desktop` (8e134180-ff6c-805d-8008-ee2856aa2694)
   - Mobile: `WhatsApp Modal - Mobile` (8e134180-ff6c-805d-8008-ee2874303797)
   ============================================================================ */
export interface WhatsAppModalProps {
  open: boolean;
  onClose: () => void;
  phoneUrl?: string;
}

const SCHEDULE_ROWS = [
  { day: "Lunes a Viernes", hours: "09:00 – 19:00", closed: false },
  { day: "Sábados", hours: "09:00 – 13:00", closed: false },
  { day: "Domingos", hours: "Cerrado", closed: true },
];

export function WhatsAppModal({
  open,
  onClose,
  phoneUrl = "https://wa.me/5491100000000",
}: WhatsAppModalProps) {
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
          aria-labelledby="whatsapp-modal-title"
          className="fixed inset-0 z-[var(--z-modal)] flex items-end justify-center lg:items-center"
        >
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 bg-[#3C3962]/48 backdrop-blur-[1.5px]"
          />

          {/* Modal Card (Desktop 440px rounded-16 / Mobile Bottom Sheet rounded-t-20) */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-[440px] flex-col gap-[18px] rounded-t-[20px] border border-[#E4E3EC] bg-[#FFFFFF] px-5 pb-7 pt-3 shadow-2xl lg:gap-5 lg:rounded-[16px] lg:p-7"
          >
            {/* Mobile Drag Handle */}
            <div className="flex justify-center lg:hidden">
              <span
                aria-hidden="true"
                className="h-[4px] w-[40px] rounded-full bg-[#8A88A3]"
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2862D9] text-[#FFFFFF] lg:size-11">
                  <WhatsappLogo
                    weight="regular"
                    className="size-5 lg:size-[22px]"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h2
                    id="whatsapp-modal-title"
                    className="font-sans text-[16px] leading-[20px] font-bold text-[#3C3962] lg:text-[18px] lg:leading-[22px]"
                  >
                    Chateá con nosotros
                  </h2>
                  <p className="font-sans text-[11px] leading-[14px] font-medium text-[#9490B3] lg:text-[12px] lg:leading-[15px]">
                    Te respondemos por WhatsApp
                  </p>
                </div>
              </div>

              {/* Close Button (Mobile #F4F4F8 32px / Desktop #3C3962 36px) */}
              <button
                type="button"
                aria-label="Cerrar modal de WhatsApp"
                onClick={onClose}
                className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#F4F4F8] text-[#3C3962] transition-colors hover:bg-[#E9E8F2] lg:size-9 lg:bg-[#3C3962] lg:text-[#FFFFFF] lg:hover:bg-[#292744] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
              >
                <X weight="bold" className="size-4 lg:size-3.5" />
              </button>
            </div>

            {/* Hours Section */}
            <div className="flex flex-col gap-2 lg:gap-2.5">
              <span className="font-sans text-[11px] leading-[14px] font-bold uppercase tracking-wide text-[#9490B3]">
                HORARIOS DE ATENCIÓN
              </span>
              <div className="flex flex-col gap-2">
                {SCHEDULE_ROWS.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between font-sans text-[14px] leading-[17px]"
                  >
                    <span
                      className={cn(
                        "font-medium",
                        row.closed ? "text-[#9490B3]" : "text-[#3C3962]"
                      )}
                    >
                      {row.day}
                    </span>
                    <span
                      className={cn(
                        row.closed
                          ? "font-medium text-[#9490B3]"
                          : "font-semibold text-[#64618A]"
                      )}
                    >
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#E4E3EC]" />

            {/* Response Time Section */}
            <div className="flex flex-col gap-2 lg:gap-2.5">
              <span className="font-sans text-[11px] leading-[14px] font-bold uppercase tracking-wide text-[#9490B3]">
                TIEMPO DE RESPUESTA ESTIMADO
              </span>
              <div className="flex items-center gap-2.5">
                <Clock
                  weight="regular"
                  className="size-[18px] shrink-0 text-[#3C3962]"
                />
                <span className="font-sans text-[13px] leading-[16px] font-semibold text-[#3C3962] lg:text-[14px] lg:leading-[17px]">
                  ~15 minutos en horario laboral
                </span>
              </div>
              <p className="font-sans text-[12px] leading-[15px] font-normal text-[#9490B3]">
                Fuera de este horario, respondemos al siguiente día hábil.
              </p>
            </div>

            {/* Primary CTA */}
            <a
              href={phoneUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex h-[41px] w-full items-center justify-center gap-2 rounded-full bg-[#2862D9] px-6 py-3 font-sans text-[14px] leading-[17px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1A4293] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
            >
              <WhatsappLogo weight="regular" className="size-4 shrink-0" />
              <span>Abrir WhatsApp</span>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================================
   RESERVA MODAL (Desktop 1024x414 3-Column Card + Mobile 375x776 Bottom Sheet)
   Penpot boards:
   - Desktop: `Reserva Root` (4fcf1ab3-ca70-8042-8008-ed63c742a816)
   - Mobile: `Reserva Modal - Mobile` (9148af2b-372b-80ea-8008-f0cf1ceb42b1)
   ============================================================================ */
export interface ReservaModalProps {
  open: boolean;
  onClose: () => void;
}

const DAYS_OF_WEEK = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

interface CalendarDayConfig {
  day: number;
  dowLabel: string;
  available: boolean;
  hasDot?: boolean;
}

// November 2026 starts on Sunday (day 1 = column 7, so 6 leading blanks for LUN..SÁB)
const NOVEMBER_2026_DAYS: CalendarDayConfig[] = Array.from(
  { length: 30 },
  (_, idx) => {
    const day = idx + 1;
    // Day 1 is Sunday (index 6 in LUN=0..DOM=6)
    const dowIndex = (idx + 6) % 7;
    const dowNames = ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"];
    // Match Penpot: available days are 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30
    const available = day >= 10 && dowIndex !== 5 && dowIndex !== 6;
    return {
      day,
      dowLabel: dowNames[dowIndex],
      available,
      hasDot: day === 10,
    };
  }
);

const MOBILE_STRIP_DAYS: {
  dow: string;
  day: number;
  available: boolean;
  hasDot?: boolean;
}[] = [
  { dow: "LUN", day: 9, available: false },
  { dow: "MAR", day: 10, available: true, hasDot: true },
  { dow: "MIÉ", day: 11, available: true },
  { dow: "JUE", day: 12, available: true },
  { dow: "VIE", day: 13, available: true },
  { dow: "SÁB", day: 14, available: false },
];

const SLOTS_24H = [
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

const SLOTS_12H = [
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
];

export function ReservaModal({ open, onClose }: ReservaModalProps) {
  const [selectedDay, setSelectedDay] = React.useState<number>(11);
  const [timeFormat, setTimeFormat] = React.useState<"12h" | "24h">("24h");
  const [selectedSlotIndex, setSelectedSlotIndex] = React.useState<
    number | null
  >(null);
  const [confirmedSlot, setConfirmedSlot] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const selectedDayObj =
    NOVEMBER_2026_DAYS.find((d) => d.day === selectedDay) ??
    NOVEMBER_2026_DAYS[10];
  const slots = timeFormat === "24h" ? SLOTS_24H : SLOTS_12H;

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reserva-modal-title"
          className="fixed inset-0 z-[var(--z-modal)] flex items-end justify-center lg:items-center lg:p-6"
        >
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 bg-[#3C3962]/48 backdrop-blur-[1.5px]"
          />

          {/* Desktop Wrapper with Close Row + 1024x414 Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-[480px] flex-col lg:max-w-[1024px]"
          >
            {/* Desktop Close Row */}
            <div className="mb-3 hidden w-full justify-end lg:flex">
              <button
                type="button"
                aria-label="Cerrar ventana de reserva"
                onClick={onClose}
                className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#3C3962] font-sans text-[14px] font-bold text-[#FFFFFF] transition-colors hover:bg-[#292744] outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]"
              >
                ✕
              </button>
            </div>

            {/* Main Card: Mobile Bottom Sheet / Desktop 3-Column Card */}
            <div className="flex max-h-[92vh] w-full flex-col gap-[18px] overflow-y-auto rounded-t-[20px] bg-[#FFFFFF] px-5 pb-7 pt-3 shadow-2xl lg:max-h-none lg:min-h-[414px] lg:flex-row lg:gap-0 lg:overflow-hidden lg:rounded-[16px] lg:border lg:border-[#E5E7EB] lg:p-0">
              {/* Mobile Drag Handle */}
              <div className="flex justify-center lg:hidden">
                <span
                  aria-hidden="true"
                  className="h-[4px] w-[40px] rounded-full bg-[#8A88A3]"
                />
              </div>

              {/* ================================================================
                 COLUMN 1: Left Info Column (328px on Desktop, Header + Meta on Mobile)
                 ================================================================ */}
              <div className="flex flex-col justify-between gap-4 lg:w-[328px] lg:shrink-0 lg:border-r lg:border-[#E5E7EB] lg:p-7">
                <div className="flex flex-col">
                  {/* Mobile Header Row (with Close Button) */}
                  <div className="flex items-center justify-between gap-3 lg:hidden">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/logo-icon.png"
                        alt="PowerLink"
                        width={32}
                        height={32}
                        className="size-8 shrink-0 rounded-full object-cover"
                      />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-sans text-[12px] leading-[15px] font-medium text-[#3C3962]">
                          Equipo @ PowerLink
                        </span>
                        <h2
                          id="reserva-modal-title"
                          className="font-sans text-[18px] leading-[22px] font-bold text-[#3C3962]"
                        >
                          Sesión de Consultoría
                        </h2>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="Cerrar ventana de reserva"
                      onClick={onClose}
                      className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#F4F4F8] text-[#3C3962] hover:bg-[#E9E8F2]"
                    >
                      <X weight="bold" className="size-4" />
                    </button>
                  </div>

                  {/* Desktop Host Row + Title + Description */}
                  <div className="hidden flex-col lg:flex">
                    <div className="flex items-center gap-3 pb-6">
                      <Image
                        src="/logo-icon.png"
                        alt="PowerLink"
                        width={32}
                        height={32}
                        className="size-8 shrink-0 rounded-full object-cover"
                      />
                      <span className="font-sans text-[14px] leading-[17px] font-medium text-[#3C3962]">
                        Equipo @ PowerLink
                      </span>
                    </div>

                    <h2 className="font-sans text-[20px] leading-[24px] font-bold text-[#3C3962]">
                      Sesión de Consultoría
                    </h2>

                    <div className="flex flex-col gap-2 py-6">
                      <p className="font-sans text-[13px] leading-[19.5px] font-normal text-[#64618A]">
                        En esta sesión exploraremos tus procesos de integración
                        tecnológica y determinaremos cómo optimizar tus
                        operaciones con las soluciones de PowerLink.
                      </p>
                      <p className="font-sans text-[13px] leading-[19.5px] font-normal text-[#9490B3]">
                        (Sesión reservada para equipos y empresas interesadas en
                        potenciar su infraestructura. Consultas a
                        contacto@powerlink.io)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Meta Box (30m, Google Meet, America/Buenos Aires) */}
                <div className="flex flex-col gap-3 border-t border-[#F9FAFB] pt-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="inline-block size-[14px] rounded-full border-[1.6px] border-[#6B7280]"
                    />
                    <span className="font-sans text-[12px] leading-[15px] font-medium text-[#374151]">
                      30m
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="inline-block size-[14px] rounded-full border-[1.6px] border-[#00AA47]"
                    />
                    <span className="font-sans text-[12px] leading-[15px] font-medium text-[#374151]">
                      Google Meet
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="inline-block size-[14px] rounded-full border-[1.6px] border-[#6B7280]"
                    />
                    <span className="font-sans text-[12px] leading-[15px] font-medium text-[#374151]">
                      America/Buenos Aires
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Divider & Label */}
              <div className="h-px w-full bg-[#E4E3EC] lg:hidden" />
              <span className="font-sans text-[13px] leading-[16px] font-semibold text-[#9490B3] lg:hidden">
                Elegí un día
              </span>

              {/* ================================================================
                 COLUMN 2: Calendar Column (430px on Desktop, Day Strip on Mobile)
                 ================================================================ */}
              <div className="flex flex-col lg:w-[430px] lg:shrink-0 lg:border-r lg:border-[#E5E7EB] lg:p-7">
                {/* Month Header */}
                <div className="flex items-center justify-between pb-3 lg:pb-6">
                  <span className="font-sans text-[14px] leading-[17px] font-bold text-[#3C3962]">
                    noviembre 2026
                  </span>
                  <CalendarNavArrows />
                </div>

                {/* Mobile Horizontal Day Strip (LUN 9 .. SÁB 14) */}
                <div className="grid grid-cols-6 gap-1.5 lg:hidden">
                  {MOBILE_STRIP_DAYS.map((item) => {
                    const isSelected = selectedDay === item.day;
                    return (
                      <div
                        key={item.day}
                        className="flex flex-col items-center gap-1"
                      >
                        <span className="flex h-5 items-center justify-center font-sans text-[11px] leading-[14px] font-bold text-[#4B5563]">
                          {item.dow}
                        </span>
                        <button
                          type="button"
                          disabled={!item.available}
                          onClick={() => {
                            setSelectedDay(item.day);
                            setConfirmedSlot(null);
                          }}
                          className={cn(
                            "flex h-[40px] w-full flex-col items-center justify-center gap-0.5 rounded-[8px] font-sans text-[12px] leading-[15px] transition-colors outline-none",
                            isSelected
                              ? "bg-[#3B7AFF] font-bold text-[#FFFFFF]"
                              : item.available
                                ? item.hasDot
                                  ? "bg-transparent font-medium text-[#3C3962] hover:bg-[#EFECE6]"
                                  : "bg-[#EFECE6] font-medium text-[#3C3962]"
                                : "cursor-not-allowed bg-transparent font-medium text-[#9CA3AF]"
                          )}
                        >
                          <span>{item.day}</span>
                          {item.hasDot && !isSelected && (
                            <span
                              aria-hidden="true"
                              className="size-1 rounded-full bg-[#3B7AFF]"
                            />
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Desktop Full 7-Column Calendar Grid */}
                <div className="hidden flex-col lg:flex">
                  {/* Day of Week Row */}
                  <div className="grid grid-cols-7 gap-1 pb-2">
                    {DAYS_OF_WEEK.map((dow) => (
                      <div
                        key={dow}
                        className="flex h-5 w-12 items-center justify-center font-sans text-[11px] leading-[14px] font-bold text-[#4B5563]"
                      >
                        {dow}
                      </div>
                    ))}
                  </div>

                  {/* Days Grid (6 leading blank cells + 30 days) */}
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={`blank-${idx}`} className="h-[40px] w-[48px]" />
                    ))}
                    {NOVEMBER_2026_DAYS.map((d) => {
                      const isSelected = selectedDay === d.day;
                      return (
                        <button
                          key={d.day}
                          type="button"
                          disabled={!d.available}
                          onClick={() => {
                            setSelectedDay(d.day);
                            setConfirmedSlot(null);
                          }}
                          className={cn(
                            "flex h-[40px] w-[48px] flex-col items-center justify-center gap-0.5 rounded-[8px] font-sans text-[12px] leading-[15px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]",
                            isSelected
                              ? "cursor-pointer bg-[#3B7AFF] font-bold text-[#FFFFFF]"
                              : d.available
                                ? d.hasDot
                                  ? "cursor-pointer bg-transparent font-medium text-[#3C3962] hover:bg-[#EFECE6]"
                                  : "cursor-pointer bg-[#EFECE6] font-medium text-[#3C3962] hover:bg-[#E4E0D8]"
                                : "cursor-not-allowed bg-transparent font-medium text-[#9CA3AF]"
                          )}
                        >
                          <span>{d.day}</span>
                          {d.hasDot && !isSelected && (
                            <span
                              aria-hidden="true"
                              className="size-1 rounded-full bg-[#3B7AFF]"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ================================================================
                 COLUMN 3: Time Slots Column (266px on Desktop, Full-width on Mobile)
                 ================================================================ */}
              <div className="flex flex-1 flex-col lg:w-[266px] lg:p-7">
                {/* Slots Header */}
                <div className="flex items-center justify-between pb-5">
                  <div className="flex items-center gap-1.5 font-sans text-[13px] leading-[16px]">
                    <span className="font-bold text-[#1F2937]">
                      {selectedDayObj.dowLabel}
                    </span>
                    <span className="font-normal text-[#374151]">
                      {selectedDayObj.day}
                    </span>
                  </div>
                  <SegmentedToggle
                    value={timeFormat}
                    onValueChange={(val) => setTimeFormat(val)}
                  />
                </div>

                {/* Confirmed Banner or Slots List */}
                {confirmedSlot ? (
                  <div className="flex flex-col gap-3 rounded-[12px] border border-[#E4E3EC] bg-[#F2FDF8] p-4">
                    <p className="font-sans text-[13px] leading-[18px] font-semibold text-[#16744D]">
                      ¡Horario seleccionado! ({selectedDayObj.dowLabel}{" "}
                      {selectedDayObj.day} nov · {confirmedSlot})
                    </p>
                    <button
                      type="button"
                      onClick={() => setConfirmedSlot(null)}
                      className="self-start font-sans text-[12px] font-semibold text-[#2051B6] underline cursor-pointer"
                    >
                      Cambiar horario
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2.5">
                    {slots.map((slot, index) => {
                      const isActiveSlot = selectedSlotIndex === index;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedSlotIndex(index);
                            setConfirmedSlot(slot);
                          }}
                          className={cn(
                            "flex h-[35px] w-full cursor-pointer items-center justify-center rounded-[8px] border font-sans text-[12px] leading-[15px] font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#3B7AFF]",
                            isActiveSlot
                              ? "border-[#3B7AFF] bg-[#F2F6FD] text-[#2051B6]"
                              : "border-[#E5E7EB] bg-[#FFFFFF] text-[#3C3962] hover:border-[#8E8BBB] hover:bg-[#F6F5F9]"
                          )}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
