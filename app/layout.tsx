import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

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
        <Modal title="Hello World" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
