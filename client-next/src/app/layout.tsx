import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import { NavBar } from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });
const title = process.env.NEXT_PUBLIC_SITE_TITLE;
const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

export const metadata = {
    title: title,
    description: description,
};

console.log(React.version);

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen bg-custom font-standard">
                    <div>
                        <NavBar />
                    </div>
                    <div className="max-w-screen-xl mx-auto px-4">
                        <header className="">
                            <Header />
                        </header>
                        <main className="">{children}</main>
                        <footer className=""></footer>d
                    </div>
                </div>
            </body>
        </html>
    );
}
