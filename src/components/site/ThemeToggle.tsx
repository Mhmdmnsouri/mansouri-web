"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] muted transition hover:text-[var(--text)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!mounted || isDark ? (
        <SolarIcon name="solar:moon-bold-duotone" size={ICON_SIZE.md} />
      ) : (
        <SolarIcon name="solar:sun-2-bold-duotone" size={ICON_SIZE.md} />
      )}
    </button>
  );
}
