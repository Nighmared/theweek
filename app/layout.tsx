import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thema der Woche",
  description: "Ein Wort pro Woche",
  icons: {
    apple: "https://vseth.ethz.ch/wp-content/uploads/2020/01/signet.png",
    icon: "https://vseth.ethz.ch/wp-content/uploads/2020/01/signet.png",
    shortcut: "https://vseth.ethz.ch/wp-content/uploads/2020/01/signet.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
