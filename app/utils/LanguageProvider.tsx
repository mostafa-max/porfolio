"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      document.body.setAttribute("dir", `${savedLang ==="en"?"ltr":"rtl"}`)
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "en" ? "ar" : "en";
      // document.body.classList.remove(prev);
      // document.body.classList.add(newLanguage);
      document.body.setAttribute("dir", `${newLanguage ==="en"?"ltr":"rtl"}`)
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
