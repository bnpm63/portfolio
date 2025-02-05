import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const hostGrotesk = localFont({
  src: [
    {
      path: "./fonts/HostGrotesk-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/HostGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HostGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HostGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/HostGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HostGrotesk-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    //
  ],
  variable: "--font-host-grotesk",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
