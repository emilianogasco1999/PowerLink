import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  stateOverride?: "default" | "focus" | "filled" | "error" | "disabled";
  containerClassName?: string;
}

/**
 * F4. Inputs & Controles — Text Input
 * States from Penpot: Default, Focus, Filled, Error ("Este campo es obligatorio"), Disabled.
 */
const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      stateOverride,
      disabled,
      className,
      containerClassName,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const isDisabled = disabled || stateOverride === "disabled";
    const hasError = Boolean(error) || stateOverride === "error";
    const errorMessage =
      typeof error === "string"
        ? error
        : hasError
          ? "Este campo es obligatorio"
          : undefined;

    return (
      <div
        data-slot="text-input"
        className={cn("flex w-full max-w-[320px] flex-col gap-[6px]", containerClassName)}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="font-sans text-[13px] leading-[16px] font-semibold text-[var(--color-text-body)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={isDisabled}
          aria-invalid={hasError || undefined}
          aria-describedby={
            errorMessage
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          className={cn(
            "h-[44px] w-full rounded-[8px] px-4 font-sans text-[14px] leading-[17px] font-normal transition-colors duration-[var(--motion-duration-fast)] outline-none",
            "bg-[var(--color-surface-base)] text-[var(--color-text-body)] placeholder:text-[var(--color-text-disabled)]",
            "border border-[var(--color-border-default)]",
            "focus:border-2 focus:border-[var(--color-action-focus)]",
            stateOverride === "focus" &&
              "border-2 border-[var(--color-action-focus)]",
            hasError &&
              "border border-[var(--color-text-error)] focus:border-2 focus:border-[var(--color-text-error)]",
            isDisabled &&
              "cursor-not-allowed bg-[var(--color-surface-disabled)] border-[var(--color-border-default)] text-[#757389] placeholder:text-[#757389]",
            className
          )}
          {...props}
        />
        {errorMessage ? (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="font-sans text-[11px] leading-[14px] font-medium text-[var(--color-text-error)]"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={`${inputId}-helper`}
            className="font-sans text-[11px] leading-[14px] font-normal text-[var(--color-text-subtle)]"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export { TextInput, TextInput as Input };

