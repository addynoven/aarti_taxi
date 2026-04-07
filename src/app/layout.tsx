import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aarti Taxi | Premium Mobility Services in India",
  description: "Experience kinetic elegance with our premium mobility services across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col font-sans text-slate-900 bg-slate-50 relative`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
