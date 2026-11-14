"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SegmentedToggleOption<T extends string = string> {
  value: T;
  label: string;
}

export interface SegmentedToggleProps<T extends string = string> {
  options?: SegmentedToggleOption<T>[];
  value?: T;
  defaultValue?: T;
  onValueChange?: (value: T) => void;
  className?: string;
  "aria-label"?: string;
}

const DEFAULT_BOOKING_OPTIONS: SegmentedToggleOption<"12h" | "24h">[] = [
  { value: "12h", label: "12 h" },
  { value: "24h", label: "24hs" },
];

/**
 * F4. Inputs & Controles — Toggle segmentado (booking)
 * Replicates Penpot `timeFormatToggle`: track `#F1F5F9` / `var(--color-booking-surface)`,
 * border `1px solid #E2E8F0`, radius `6px`, padding `2px`, options `"12 h"` / `"24hs"`.
 */
export function SegmentedToggle<T extends string = "12h" | "24h">({
  options = DEFAULT_BOOKING_OPTIONS as unknown as SegmentedToggleOption<T>[],
  value: controlledValue,
  defaultValue,
  onValueChange,
  className,
  "aria-label": ariaLabel = "Formato de hora",
}: SegmentedToggleProps<T>) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<T>(
    defaultValue ?? options[0]?.value
  );

  const activeValue = controlledValue ?? uncontrolledValue;

  const handleSelect = (nextValue: T) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      data-slot="segmented-toggle"
      className={cn(
        "inline-flex h-[26px] items-center gap-[2px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F5F9] p-[2px]",
        className
      )}
    >
      {options.map((option) => {
        const isSelected = option.value === activeValue;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => handleSelect(option.value)}
            className={cn(
              "inline-flex h-[22px] items-center justify-center rounded-[4px] px-[10px] py-[4px] font-sans text-[11px] leading-[14px] transition-all duration-[var(--motion-duration-fast)] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-focus)]",
              isSelected
                ? "bg-[var(--color-surface-base)] font-bold text-[var(--color-action-focus)] shadow-2xs"
                : "bg-transparent font-medium text-[var(--color-text-subtle)] hover:text-[var(--color-text-body)]"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

