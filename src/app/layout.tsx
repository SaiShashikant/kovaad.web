import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvatica = localFont({
    src: "../../public/fonts/Helvetica.ttf",
    variable: "--font-wix-sans",
    weight: "100 900",
});


export const metadata: Metadata = {
    title: "Home | Ko-VaaD",
    description: "",
    icons: "/logo.svg",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
            className={`${helvatica.variable}  antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
