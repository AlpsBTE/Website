export const languages = ['en', 'de', 'fr'] as const;

export type Language = typeof languages[number];
