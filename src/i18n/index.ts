// src/i18n/index.ts
import { NavLabels } from "./ui";
import { heroData } from "./hero";
import { skillsData } from "./skills";
import { aboutMeData } from "./aboutMe";
import { projectsData } from "./projects";
import { certificatesData } from "./certificates";
import { roadData } from "./road";
import { contactData } from "./contact";

export const defaultLang = "es" as const;

export const translations = {
  es: {
    ...NavLabels.es,
    ...heroData.es,
    ...aboutMeData.es,
    ...skillsData.es,
    ...projectsData.es,
    ...roadData.es,
    ...contactData.es,
    ...certificatesData.es,
  },
  en: {
    ...NavLabels.en,
    ...heroData.en,
    ...aboutMeData.en,
    ...skillsData.en,
    ...projectsData.en,
    ...roadData.en,
    ...contactData.en,
    ...certificatesData.en,
  },
} as const;

export type Lang = keyof typeof translations;

export const getT = (lang: Lang = defaultLang) => {
  const dict = translations[lang] as Record<string, unknown>;
  return (key: string, fallback = ""): string => {
    const value = dict[key];
    return typeof value === "string" ? value : fallback;
  };
};
