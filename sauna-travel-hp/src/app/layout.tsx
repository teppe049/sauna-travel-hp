import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/base/Header/Header";
import Footer from "./components/base/Footer/Footer";

export const metadata = {
  title: "Sauna Travel",
  description: "サウナ施設専門のメディアと予約サービス",
  icons: {
    icon: "/icon-512x512.png", // ファビコンの指定
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
