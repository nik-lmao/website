import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import type { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "green",
}

export const metadata: Metadata = {
  title: "nik's website",
  description: "welcome to my website!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="nik's website" />
        <meta property="og:description" content="welcome to my website!" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="nik's website" />
        <meta property="og:image" content="/pfp.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="image alt" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
