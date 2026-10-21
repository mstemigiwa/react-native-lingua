import { fonts } from "./fonts";

// Mirrors the type scale in src/global.css (heading-1 … caption utilities).
// Prefer the className utilities; use these for dynamic/inline styles only.
export const typography = {
  h1: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38.4 },
  h2: { fontFamily: fonts.semiBold, fontSize: 24, lineHeight: 31.2 },
  h3: { fontFamily: fonts.semiBold, fontSize: 20, lineHeight: 26 },
  h4: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 22.4 },
  bodyLg: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 25.6 },
  bodyMd: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 22.4 },
  bodySm: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 20.8 },
  caption: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 15.4 },
} as const;

export type TypographyToken = keyof typeof typography;
