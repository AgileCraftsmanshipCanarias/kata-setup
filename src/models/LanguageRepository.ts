import { Libraries } from "./Libraries.ts";

export type LanguageRepository = {
  language: string;
  url: string;
  libraries: Libraries;
};

export function languageRepositoryCompare(
  a: LanguageRepository,
  b: LanguageRepository,
) {
  return a.language.localeCompare(b.language);
}
