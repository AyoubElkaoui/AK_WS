import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AK Web Solutions - Professionele Webontwikkeling Nederland",
    description: "Moderne websites, webshops en applicaties die écht verkopen. Van Next.js development tot e-commerce platforms - AK Web Solutions levert resultaatgerichte oplossingen.",
    keywords: "webontwikkeling, website laten maken, Next.js development, webshop, e-commerce, Nederland",
};

export default function Home() {
    return (
        <>
            <ScrollUp />
            <Hero />
            <Features />
            <AboutSectionOne />
            <Pricing />
            <Contact />
        </>
    );
}