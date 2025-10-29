import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../font/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
