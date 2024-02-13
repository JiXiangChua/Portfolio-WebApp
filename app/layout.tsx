import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavBar from "./ui/components/NavBar";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/sf-pro-display_light.woff2",
      weight: "200",
      style: "light",
    },
    {
      path: "../public/fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "semi bold",
    },
    {
      path: "../public/fonts/sf-pro-display_thin.woff2",
      weight: "300",
      style: "thin",
    },
  ],
});

// const myFont = localFont({
//   src: "../public/fonts/sf-pro-display_bold.woff2",
// });

export const metadata: Metadata = {
  title: "Jace Chua",
  description: "Welcome to Jace's developer portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-[#FFFFFF] container mx-auto ${myFont.className}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
