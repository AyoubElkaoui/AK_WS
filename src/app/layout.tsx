"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="nl">
        <head>
            <title>AK Web Solutions - Professionele Webontwikkeling</title>
            <meta name="description" content="Moderne websites en webapplicaties die écht verkopen. AK Web Solutions - jouw partner in professionele webontwikkeling." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </Providers>
        </body>
        </html>
    );
}