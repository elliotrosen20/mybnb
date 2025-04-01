import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

import ToasterProvider from "./providers/ToasterProvider";
import { getCurrentUser } from "./actions/getCurrentUser";
import { Suspense } from "react";

const font = Nunito({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Mybnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <ToasterProvider />
        <Suspense fallback={<div className="h-screen" />}>
          <SearchModal />
        </Suspense>
        <RentModal />
        <RegisterModal />
        <LoginModal />
        <Suspense fallback={<div className="h-screen" />}>
          <Navbar currentUser={currentUser} />
        </Suspense>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
