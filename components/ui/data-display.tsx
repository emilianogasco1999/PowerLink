"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ============================================================================
   F5. DATA DISPLAY — Tag
   Penpot spec: bg #F6F5F2 (var(--color-background-page)), border 1px solid #3C3962
   (var(--color-text-body)), radius 8px, pad 4px 10px, text 12px medium (500).
   ============================================================================ */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
}

export function Tag({ label, children, className, ...props }: TagProps) {
  return (
    <span
      data-slot="tag"
      className={cn(
        "inline-flex items-center justify-center rounded-[8px] border border-[#3C3962]/12 bg-[var(--color-background-page)] px-[10px] py-[4px] font-sans text-[12px] leading-[15px] font-medium text-[var(--color-text-body)]",
        className
      )}
      {...props}
    >
      {label ?? children}
    </span>
  );
}

/* ============================================================================
   F5. DATA DISPLAY — Pill (status)
   Penpot spec: bg #05A8AC / var(--color-accent-teal), radius 999px, pad 4px 12px,
   text 11px semibold (600) #FFFFFF.
   ============================================================================ */
export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  tone?: "teal" | "blue" | "amber" | "green" | "red";
}

export function StatusPill({
  label,
  tone = "teal",
  children,
  className,
  ...props
}: StatusPillProps) {
  const toneClasses: Record<NonNullable<StatusPillProps["tone"]>, string> = {
    teal: "bg-[#05A8AC] text-[var(--color-text-inverse)]",
    blue: "bg-[var(--color-action-primary)] text-[var(--color-text-inverse)]",
    amber: "bg-[var(--color-accent-amber)] text-[var(--color-text-inverse)]",
    green: "bg-[var(--color-text-success)] text-[var(--color-text-inverse)]",
    red: "bg-[var(--color-text-error)] text-[var(--color-text-inverse)]",
  };

  return (
    <span
      data-slot="status-pill"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-[12px] py-[4px] font-sans text-[11px] leading-[13px] font-semibold",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {label ?? children}
    </span>
  );
}

/* ============================================================================
   F5. DATA DISPLAY — Card / Service (Abierta + Colapsada)
   Penpot spec: bg #FFFFFF, border 1px solid var(--color-border-default), p-6 (24px),
   gap-4 (16px). Header with 20x20 icon circle + 18px bold title + −/+ toggle (#3B7AFF).
   Body with 14px regular description (#64618A) + tags row (gap-2).
   ============================================================================ */
export interface ServiceCardProps {
  title: string;
  description?: string;
  tags?: string[];
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  tags = [],
  icon,
  defaultExpanded = true,
  expanded: controlledExpanded,
  onExpandedChange,
  className,
}: ServiceCardProps) {
  const [uncontrolledExpanded, setUncontrolledExpanded] =
    React.useState(defaultExpanded);
  const isExpanded = controlledExpanded ?? uncontrolledExpanded;

  const handleToggle = () => {
    const next = !isExpanded;
    if (controlledExpanded === undefined) {
      setUncontrolledExpanded(next);
    }
    onExpandedChange?.(next);
  };

  return (
    <article
      data-slot="service-card"
      data-state={isExpanded ? "open" : "closed"}
      className={cn(
        "flex w-full flex-col gap-4 border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-6 transition-colors duration-[var(--motion-duration-base)]",
        className
      )}
    >
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={handleToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-focus)] rounded-[4px]"
      >
        <span className="flex items-center gap-[10px]">
          {icon ? (
            <span className="inline-flex size-5 shrink-0 items-center justify-center text-[var(--color-action-primary)]">
              {icon}
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="inline-block size-5 shrink-0 rounded-full bg-[#2862D9]"
            />
          )}
          <span className="font-sans text-[18px] leading-[22px] font-bold text-[var(--color-text-body)]">
            {title}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="font-sans text-[18px] leading-[22px] font-bold text-[var(--color-action-focus)] select-none"
        >
          {isExpanded ? "−" : "+"}
        </span>
      </button>

      {isExpanded && (description || tags.length > 0) && (
        <div className="flex flex-col gap-4">
          {description && (
            <p className="font-sans text-[14px] leading-[17px] font-normal text-[var(--color-text-subtle)]">
              {description}
            </p>
          )}
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

/* ============================================================================
   F5. DATA DISPLAY — Celda de calendario
   Penpot spec: 48x40px, radius 8px, centered 12px text.
   States: available, hover, selected, disabled.
   ============================================================================ */
export type CalendarDayState = "available" | "hover" | "selected" | "disabled";

export interface CalendarDayCellProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  day: number | string;
  state?: CalendarDayState;
  selected?: boolean;
}

export function CalendarDayCell({
  day,
  state = "available",
  selected,
  disabled,
  className,
  ...props
}: CalendarDayCellProps) {
  const resolvedState: CalendarDayState = disabled
    ? "disabled"
    : selected
      ? "selected"
      : state;

  return (
    <button
      type="button"
      disabled={resolvedState === "disabled"}
      aria-pressed={resolvedState === "selected"}
      data-slot="calendar-day-cell"
      data-state={resolvedState}
      className={cn(
        "inline-flex h-[40px] w-[48px] items-center justify-center rounded-[8px] font-sans text-[12px] leading-[15px] transition-colors duration-[var(--motion-duration-fast)] outline-none select-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-focus)]",
        resolvedState === "available" &&
          "cursor-pointer bg-transparent font-medium text-[var(--color-text-body)] hover:bg-[#EFECE6]",
        resolvedState === "hover" &&
          "cursor-pointer bg-[#EFECE6] font-medium text-[var(--color-text-body)]",
        resolvedState === "selected" &&
          "cursor-pointer bg-[var(--color-action-focus)] font-bold text-[var(--color-text-inverse)]",
        resolvedState === "disabled" &&
          "cursor-not-allowed bg-transparent font-medium text-[#757389]",
        className
      )}
      {...props}
    >
      {day}
    </button>
  );
}

