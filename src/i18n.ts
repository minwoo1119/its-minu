export type Language = 'ko' | 'en';

export interface LocalizedText {
  ko: string;
  en: string;
}

export const getText = (
  language: Language,
  text: LocalizedText | string
): string => {
  if (typeof text === 'string') {
    return text;
  }

  return text[language];
};
