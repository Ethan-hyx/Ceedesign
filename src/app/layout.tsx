import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="zh" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
