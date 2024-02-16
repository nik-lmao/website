import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nik's website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="nik's website" />
        <meta property="og:description" content="welcome to my website!" />
        <meta property="og:image" content="https://i.pinimg.com/originals/c3/93/de/c393de62970df6a45ddd7bc65935fb96.gif" />
        <meta property="og:url" content="https://nik-lmao.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
