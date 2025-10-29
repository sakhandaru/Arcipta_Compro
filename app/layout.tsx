import { satoshi } from "@/lib/fonts";
import "./globals.css";
import { Footer } from "../components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata = {
  title: "Arcipta | Growth Partner in Digital",
  description: "Company profile Arcipta — Konsultan pertumbuhan digital dan software house.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${satoshi.variable}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
      </ThemeProvider>
    </html>
  );
}
