"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ============================================================================
   F7. ALERTAS & CARDS — Alert (Error | Success | Warning | Info)
   Penpot spec: height 44px, radius 8px, pad 14px 16px, gap 12px,
   8x8px status dot + 13px semibold (600) text.
   ============================================================================ */
export type AlertVariant = "error" | "success" | "warning" | "info";

export interface StatusAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  message: string;
}

const ALERT_STYLES: Record<
  AlertVariant,
  { container: string; dot: string; text: string }
> = {
  error: {
    container: "bg-[var(--color-status-error-bg)]",
    dot: "bg-[var(--color-text-error)]",
    text: "text-[var(--color-text-error)]",
  },
  success: {
    container: "bg-[var(--color-status-success-bg)]",
    dot: "bg-[var(--color-text-success)]",
    text: "text-[var(--color-text-success)]",
  },
  warning: {
    container: "bg-[var(--color-status-warning-bg)]",
    dot: "bg-[var(--color-text-warning)]",
    text: "text-[var(--color-text-warning)]",
  },
  info: {
    container: "bg-[var(--color-status-info-bg)]",
    dot: "bg-[var(--color-action-primary)]",
    text: "text-[var(--color-action-primary)]",
  },
};

export function StatusAlert({
  variant = "info",
  message,
  className,
  ...props
}: StatusAlertProps) {
  const style = ALERT_STYLES[variant];
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      data-slot="status-alert"
      data-variant={variant}
      className={cn(
        "flex min-h-[44px] w-full items-center gap-3 rounded-[8px] px-4 py-[14px]",
        style.container,
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("inline-block size-2 shrink-0 rounded-full", style.dot)}
      />
      <span
        className={cn(
          "font-sans text-[13px] leading-[16px] font-semibold",
          style.text
        )}
      >
        {message}
      </span>
    </div>
  );
}

/* ============================================================================
   F7. ALERTAS & CARDS — FAQ Accordion Row & Group
   Penpot spec: row pad 16px 0, flex-row justify-between items-center,
   question 15px semibold (600) #3C3962, icon + / − 18px bold (700) #9490B3,
   bottom divider 1px solid #D3D2E5.
   Uses native <details>/<summary> for accessible progressive disclosure.
   ============================================================================ */
export interface FaqAccordionItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface FaqAccordionRowProps {
  question: string;
  answer?: string;
  defaultOpen?: boolean;
  name?: string;
  className?: string;
}

export function FaqAccordionRow({
  question,
  answer,
  defaultOpen = false,
  name,
  className,
}: FaqAccordionRowProps) {
  return (
    <details
      name={name}
      open={defaultOpen}
      data-slot="faq-accordion-row"
      className={cn(
        "group border-b border-[var(--color-border-default)]",
        className
      )}
    >
      <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-4 font-sans text-[15px] leading-[18px] font-semibold text-[var(--color-text-body)] outline-none select-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-focus)] rounded-[4px] [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span
          aria-hidden="true"
          className="font-sans text-[18px] leading-[22px] font-bold text-[var(--color-text-disabled)] transition-transform duration-[var(--motion-duration-fast)]"
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      {answer && (
        <div className="pb-4 font-sans text-[14px] leading-[22px] font-normal text-[var(--color-text-subtle)]">
          {answer}
        </div>
      )}
    </details>
  );
}

export interface FaqAccordionProps {
  items: FaqAccordionItem[];
  exclusiveName?: string;
  className?: string;
}

export function FaqAccordion({
  items,
  exclusiveName,
  className,
}: FaqAccordionProps) {
  return (
    <div data-slot="faq-accordion" className={cn("flex w-full flex-col", className)}>
      {items.map((item) => (
        <FaqAccordionRow
          key={item.id}
          question={item.question}
          answer={item.answer}
          defaultOpen={item.defaultOpen}
          name={exclusiveName}
        />
      ))}
    </div>
  );
}

/* ============================================================================
   F7. ALERTAS & CARDS — Card / Info
   Penpot spec: bg #FFFFFF, border 1px solid #E4E3EC (var(--color-border-default)),
   radius 12px, p-5 (20px), gap 10px. Title 16px bold (700) #3C3962,
   description 13px regular (400) #64618A.
   ============================================================================ */
export interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export function InfoCard({
  title,
  description,
  className,
  ...props
}: InfoCardProps) {
  return (
    <div
      data-slot="info-card"
      className={cn(
        "flex flex-col gap-[10px] rounded-[12px] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-5",
        className
      )}
      {...props}
    >
      <h3 className="font-sans text-[16px] leading-[19px] font-bold text-[var(--color-text-body)]">
        {title}
      </h3>
      <p className="font-sans text-[13px] leading-[18px] font-normal text-[var(--color-text-subtle)]">
        {description}
      </p>
    </div>
  );
}

