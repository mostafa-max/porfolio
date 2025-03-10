"use client";

import { useLanguage } from "../utils/LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-md transition-all"
    >
      {language === "en" ? "EN" : "عربي"}
    </button>
  );
}
