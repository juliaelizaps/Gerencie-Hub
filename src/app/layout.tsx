import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/navigation/ResponsiveNav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Gerencie Hub",
  description: "Gerenciador de Food Trucks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}} antialiased`}>
          <ResponsiveNav>
            <div className="flex-grow">
          {children}
            </div>
          </ResponsiveNav>
          </body>
    </html>
  );
}
