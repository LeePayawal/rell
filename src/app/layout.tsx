import "~/styles/globals.css";

import { type Metadata } from "next";
import { Edu_NSW_ACT_Foundation, Geist } from "next/font/google";
import { isNullOrUndefined } from "util";
import { EndOfLineState } from "typescript";

export const metadata: Metadata = {
  title: "rell",
  description: "Created by rell",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <main className="flex w-full bg-amber-200">
        <h1>Hello Lee!</h1>
      </main>
      <body>{children}</body>
    </html>
  );
}