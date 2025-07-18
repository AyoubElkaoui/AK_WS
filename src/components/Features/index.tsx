"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
    return (
        <>
            <section id="services" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
                <div className="container">
                    {/* Clean section title */}
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                            Mijn specialisaties
                        </h2>
                        <p className="text-lg text-body-color dark:text-body-color-dark leading-relaxed">
                            Moderne webtechnologieën die jouw bedrijf vooruit helpen en meer klanten aantrekken.
                        </p>
                    </div>

                    {/* Professional features grid */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="group relative"
                            >
                                {/* Clean card design */}
                                <div className="h-full rounded-lg bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800 border border-gray-100 dark:border-gray-700">

                                    {/* Subtle icon styling */}
                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                        {feature.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-body-color dark:text-body-color-dark leading-relaxed">
                                        {feature.paragraph}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Professional call to action */}
                    <div className="mt-16 text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md bg-black dark:bg-white px-8 py-4 text-lg font-semibold text-white dark:text-black transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-100"
                        >
                            Bespreek jouw project
                            <svg
                                className="ml-2 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <p className="mt-3 text-sm text-body-color dark:text-body-color-dark">
                            Gratis consultatie • Vrijblijvende offerte
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;