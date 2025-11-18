import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "./satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "./satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "./satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "./satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "./satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "./satoshi/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./satoshi/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./satoshi/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
