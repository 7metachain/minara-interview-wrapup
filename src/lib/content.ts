import resumeData from "../../data/resume.json";
import projectsData from "../../data/projects.json";
import jdData from "../../data/jd.json";
import automationData from "../../data/automationModules.json";
import { site, i18n, getText, getNav, absoluteUrl, type Locale, type I18nText } from "../../data/site";

export { site, i18n, getText, getNav, absoluteUrl };
export type { Locale, I18nText };

export const resume = resumeData;
export const projects = projectsData.projects;
export const projectsMeta = projectsData.meta;
export const jd = jdData;
export const automation = automationData;

export type ResumeData = typeof resumeData;
export type ResumeExperience = (typeof resumeData.experience)[number];
export type ResumeEducation = (typeof resumeData.education)[number];
export type ResumeCommunity = (typeof resumeData.community)[number];
export type ResumeSkillGroup = (typeof resumeData.skills)[keyof typeof resumeData.skills];
export type ProjectData = (typeof projectsData.projects)[number];
export type JdPillar = (typeof jdData.pillars)[number];
export type AutomationPillar = (typeof automationData.pillars)[number];
export type AutomationModule = (typeof automationData.pillars)[number]["modules"][number];

export function t(text: string | I18nText, locale: Locale) {
  if (typeof text === "string") return text;
  return getText(text, locale);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
