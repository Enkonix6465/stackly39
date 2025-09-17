"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder until mounted
    return <div className="size-4" />;
  }
  const isDark = theme === "dark" || resolvedTheme === "dark";

  return (
    <button
      className="flex items-center justify-center rounded-md border border-transparent bg-muted p-2 text-muted-foreground shadow-sm transition-colors  "
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
