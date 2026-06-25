"use client";

import { Icon } from "@iconify/react";

type SolarIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export const ICON_SIZE = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 22,
  xxl: 26,
  xxxl: 32,
} as const;

export function SolarIcon({ name, size = 18, className = "" }: SolarIconProps) {
  return (
    <Icon
      icon={name}
      width={size}
      height={size}
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px`, minHeight: `${size}px`, display: "block" }}
      aria-hidden="true"
    />
  );
}
