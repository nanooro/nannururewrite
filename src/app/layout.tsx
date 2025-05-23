import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

<<<<<<< HEAD:src/app/layout.tsx
export const metadata: Metadata = {
  title: "nannuru",
  description: "News and Entertainment",
=======
export const metadata = {
  title: "Nannuru",
  description: "News and entertainment",
>>>>>>> 40e41e4 (init):src/app/layout.js
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col">{children}</div>
      </body>
    </html>
  );
}
