import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const wixSans = localFont({
  src: "../../public/fonts/WixMadeforText-Medium.ttf",
  variable: "--font-wix-sans",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Home | Ko-VaaD",
  description: "",
  icons : "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wixSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
