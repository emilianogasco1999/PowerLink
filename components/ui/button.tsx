"use client";

import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { WhatsappLogo } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent font-sans text-[14px] leading-[17px] font-semibold whitespace-nowrap transition-all duration-[var(--motion-duration-base)] outline-none select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-focus)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[var(--color-action-disabled)] disabled:border-transparent disabled:text-[var(--color-text-disabled)] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-action-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-action-primary-hover)] active:bg-[var(--color-action-primary-pressed)]",
        primary:
          "bg-[var(--color-action-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-action-primary-hover)] active:bg-[var(--color-action-primary-pressed)]",
        secondary:
          "bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-body)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-strong)] active:bg-[var(--pl-slate-100)] active:border-[var(--color-border-strong)]",
        outline:
          "bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-body)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-strong)] active:bg-[var(--pl-slate-100)] active:border-[var(--color-border-strong)]",
        icon:
          "bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-body)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-strong)] active:bg-[var(--pl-slate-100)] active:border-[var(--color-border-strong)]",
        onDarkPrimary:
          "bg-[var(--color-surface-base)] text-[var(--color-text-body)] hover:bg-[var(--color-surface-hover)] active:bg-[var(--pl-slate-100)]",
        onDarkSecondary:
          "bg-transparent border-white/30 text-[var(--color-text-inverse)] hover:bg-white/10 hover:border-white/50 active:bg-white/20",
        whatsapp:
          "bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-body)] hover:bg-[#16734D] hover:border-[#16734D] hover:text-[#F6F5F2] active:bg-[#115A3C] active:border-[#115A3C] active:text-[#F6F5F2]",
        ghost:
          "bg-transparent text-[var(--color-text-body)] hover:bg-[var(--color-surface-hover)] active:bg-[var(--pl-slate-100)]",
        destructive:
          "bg-[var(--color-status-error-bg)] text-[var(--color-text-error)] hover:bg-[var(--pl-red-100)] active:bg-[var(--pl-red-200)]",
        link:
          "text-[var(--color-action-primary)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-[32px] px-4 py-2 text-[12px] leading-[16px] [&_svg:not([class*='size-'])]:size-4",
        default: "h-[44px] px-6 py-3 text-[14px] leading-[17px] [&_svg:not([class*='size-'])]:size-4",
        md: "h-[44px] px-6 py-3 text-[14px] leading-[17px] [&_svg:not([class*='size-'])]:size-4",
        lg: "h-[52px] px-8 py-4 text-[14px] leading-[20px] [&_svg:not([class*='size-'])]:size-5",
        icon: "size-[40px] p-3 [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-[32px] p-2 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-[48px] p-3.5 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

function Button({
  className,
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: ButtonProps) {
  const resolvedSize = variant === "icon" && size === "md" ? "icon" : size;
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size: resolvedSize, className }))}
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </ButtonPrimitive>
  );
}

/**
 * Utilidades — Btn Agendar ("Agendar Consultoría")
 * Replicates Penpot Utilidades component `Btn Agendar` (Default & Hover states).
 */
export interface BtnAgendarProps extends Omit<ButtonProps, "variant"> {
  label?: string;
}

function BtnAgendar({
  label = "Agendar Consultoría",
  size = "md",
  className,
  ...props
}: BtnAgendarProps) {
  return (
    <Button
      variant="primary"
      size={size}
      className={className}
      {...props}
    >
      {label}
    </Button>
  );
}

/**
 * Utilidades — Btn Mensajes ("Whatsapp")
 * Replicates Penpot Utilidades component `Btn Mensajes` (Default white pill -> Hover green #16734D pill).
 */
export interface BtnMensajesProps extends Omit<ButtonProps, "variant"> {
  label?: string;
}

function BtnMensajes({
  label = "Whatsapp",
  size = "md",
  className,
  ...props
}: BtnMensajesProps) {
  return (
    <Button
      variant="whatsapp"
      size={size}
      leadingIcon={<WhatsappLogo weight="regular" className="size-4 shrink-0" />}
      className={className}
      {...props}
    >
      {label}
    </Button>
  );
}

export { Button, BtnAgendar, BtnMensajes, buttonVariants };
