import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Mybnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
