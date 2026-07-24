"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const themeChangeEvent = "site-theme-change";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
}

function subscribeToTheme(onStoreChange: () => void) {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const handleThemeChange = () => onStoreChange();
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== "theme") return;

    const storedTheme = event.newValue === "dark" ? "dark" : "light";
    applyTheme(storedTheme);
    onStoreChange();
  };
  const handleSystemThemeChange = () => {
    if (getStoredTheme()) return;

    applyTheme(colorScheme.matches ? "dark" : "light");
    onStoreChange();
  };

  window.addEventListener(themeChangeEvent, handleThemeChange);
  window.addEventListener("storage", handleStorage);
  colorScheme.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(themeChangeEvent, handleThemeChange);
    window.removeEventListener("storage", handleStorage);
    colorScheme.removeEventListener("change", handleSystemThemeChange);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const toggleTheme = () => {
    const nextTheme = getThemeSnapshot() === "light" ? "dark" : "light";

    applyTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // The visible theme still changes if storage is unavailable.
    }
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
