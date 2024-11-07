import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const tomorrow = Tomorrow ({
  subsets: ["latin"],
  variable: "--font-tomorrow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Benjamin Pham",
  description: "Benjamin Pham's portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tomorrow.variable} antialiased`}> 
        {children}
      </body>
    </html>
  );
}




