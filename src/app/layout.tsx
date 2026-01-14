import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOGO IMPERIAL ENERGY",
  description: "Smart fuel delivery for business and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased bg-white text-slate-900 font-sans`}
      >
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
