import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarMenu />
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
