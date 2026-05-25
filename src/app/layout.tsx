import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Cee — Designer & Creative",
  description: "Portfolio of a designer focused on calm, intentional interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${dmMono.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-mono), monospace" }}>
        {children}
      </body>
    </html>
  );
}
