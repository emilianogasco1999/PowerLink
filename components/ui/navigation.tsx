"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ============================================================================
   F6. NAVIGATION — Nav Link (sidebar)
   Penpot spec: flex-row items-center gap-2 (8px), text 14px.
   States:
   - default: font-medium (500), #64618A / var(--color-text-subtle)
   - hover: font-medium (500), #3C3962 / var(--color-text-body)
   - active: 6x6px blue dot (#3B7AFF / var(--color-action-focus)) + font-semibold (600) #3B7AFF
   ============================================================================ */
export interface SidebarNavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  active?: boolean;
  stateOverride?: "default" | "hover" | "active";
}

export function SidebarNavLink({
  label,
  active = false,
  stateOverride,
  href = "#",
  className,
  ...props
}: SidebarNavLinkProps) {
  const isActive = active || stateOverride === "active";
  const isHoverForced = stateOverride === "hover";

  return (
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      data-slot="sidebar-nav-link"
      data-state={isActive ? "active" : isHoverForced ? "hover" : "default"}
      className={cn(
        "group inline-flex items-center gap-2 font-sans text-[14px] leading-[17px] transition-colors duration-[var(--motion-duration-fast)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-focus)] rounded-[4px]",
        isActive
          ? "font-semibold text-[var(--color-action-focus)]"
          : isHoverForced
            ? "font-medium text-[var(--color-text-body)]"
            : "font-medium text-[var(--color-text-subtle)] hover:text-[var(--color-text-body)]",
        className
      )}
      {...props}
    >
      {isActive && (
        <span
          aria-hidden="true"
          className="inline-block size-[6px] shrink-0 rounded-full bg-[var(--color-action-focus)]"
        />
      )}
      <span>{label}</span>
    </a>
  );
}

/* ============================================================================
   F6. NAVIGATION — Calendar Nav Arrows
   Penpot spec: prev/next buttons (‹, ›), each 21x28px, pad 4px 8px, text 16px medium (500),
   color #9CA3AF (default) -> #3C3962 (hover).
   ============================================================================ */
export interface CalendarNavArrowsProps {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  stateOverride?: "default" | "hover";
  className?: string;
}

export function CalendarNavArrows({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  stateOverride = "default",
  className,
}: CalendarNavArrowsProps) {
  const baseBtnClass = cn(
    "inline-flex h-[28px] w-[21px] items-center justify-center rounded-[4px] px-2 py-1 font-sans text-[16px] leading-[19px] font-medium transition-colors duration-[var(--motion-duration-fast)] cursor-pointer outline-none select-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-focus)] disabled:cursor-not-allowed disabled:opacity-40",
    stateOverride === "hover"
      ? "text-[var(--color-text-body)]"
      : "text-[#9CA3AF] hover:text-[var(--color-text-body)]"
  );

  return (
    <div
      data-slot="calendar-nav-arrows"
      className={cn("inline-flex items-center gap-1", className)}
    >
      <button
        type="button"
        aria-label="Mes anterior"
        disabled={prevDisabled}
        onClick={onPrev}
        className={baseBtnClass}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Mes siguiente"
        disabled={nextDisabled}
        onClick={onNext}
        className={baseBtnClass}
      >
        ›
      </button>
    </div>
  );
}

