import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoSansThai = Noto_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['thai'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wrikka Course",
  description: "เรียนรู้การพัฒนาเว็บไซต์ทันสมัยกับ Wrikka Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
