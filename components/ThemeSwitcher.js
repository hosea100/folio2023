"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("system");

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <button class="bg-skin-button-light hover:bg-skin-button-hoverLight text-skin-base-light font-bold py-2 px-4 rounded-full dark:bg-skin-button-dark dark:hover:bg-skin-button-hoverDark dark:text-skin-base-dark" onClick={() => setTheme("light")}>Light</button>
      <button class="bg-skin-button-light hover:bg-skin-button-hoverLight text-skin-base-light font-bold py-2 px-4 rounded-full dark:bg-skin-button-dark dark:hover:bg-skin-button-hoverDark dark:text-skin-base-dark" onClick={() => setTheme("dark")}>Dark</button>
    </div>
  )
}

export default ThemeSwitcher