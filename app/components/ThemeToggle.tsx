"use client"
import { useTheme } from "../utils/ThemeProvider";
import {MoonIcon,SunIcon} from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg">
      {theme === "light" ? <MoonIcon className="-rotate-90"/> : <SunIcon/>}
    </button>
  );
}
