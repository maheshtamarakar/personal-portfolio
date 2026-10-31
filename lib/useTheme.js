import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// Reads/writes the theme to localStorage and toggles a `data-theme`
// attribute on <html>. Guards all localStorage/DOM access so it is safe to
// call during SSR (Next.js pages router) without causing a hydration
// mismatch: we always render "light" on the server/first client render,
// then sync to the stored preference in an effect after mount.
export default function useTheme() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let initial = "light";
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        initial = stored;
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        initial = "dark";
      }
    } catch (err) {
      // localStorage can throw in private browsing / blocked storage - fall
      // back to light theme silently.
    }
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      document.documentElement.setAttribute("data-theme", theme);
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      // ignore storage errors
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme, mounted };
}
