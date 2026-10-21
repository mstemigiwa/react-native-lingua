// Font family names must match the keys passed to useFonts (and the font PostScript names).
export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

// Loaded once in the root layout via expo-font's useFonts.
export const fontAssets = {
  [fonts.regular]: require("@/assets/fonts/Poppins-Regular.ttf"),
  [fonts.medium]: require("@/assets/fonts/Poppins-Medium.ttf"),
  [fonts.semiBold]: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  [fonts.bold]: require("@/assets/fonts/Poppins-Bold.ttf"),
};
