import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/navigation/ResponsiveNav";

const barlow_Condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body
        className={barlow_Condensed.className}><ResponsiveNav/>{children}
      </body>
    </html>
  );
}
