"use client";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded-xl border border-white/10 px-3 py-1"
    >
      {theme === "dark" ? "حالت روشن" : "حالت تیره"}
    </button>
  );
}
