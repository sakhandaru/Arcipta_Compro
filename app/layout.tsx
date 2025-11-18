import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import { satoshi } from "./fonts/satoshi";

export const metadata: Metadata = {
  title: "Brillance - Effortless Custom Contract Billing",
  description:
    "Streamline your billing process with seamless automation for every custom contract, tailored by Brillance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} antialiased`}>
      <body className="font-satoshi antialiased bg-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
