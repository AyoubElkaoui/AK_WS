"use client";

import { useState } from "react";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Corporate Dashboard",
            category: "webapp",
            description: "Moderne dashboard applicatie voor data-analyse en rapportage",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            results: "40% efficiëntere workflows",
            year: "2024"
        },
        {
            id: 2,
            title: "E-commerce Platform",
            category: "ecommerce",
            description: "Volledig responsive webshop met geïntegreerd betaalsysteem",
            technologies: ["React", "Node.js", "Stripe API"],
            results: "3x meer online verkopen",
            year: "2024"
        },
        {
            id: 3,
            title: "Bedrijfswebsite",
            category: "website",
            description: "Professionele website met CMS en SEO optimalisatie",
            technologies: ["Next.js", "Sanity CMS", "Vercel"],
            results: "85% snellere laadtijden",
            year: "2023"
        },
        {
            id: 4,
            title: "SaaS Landing Page",
            category: "website",
            description: "Converterende landing page voor software startup",
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
            results: "25% hogere conversie",
            year: "2024"
        },
        {
            id: 5,
            title: "Booking Platform",
            category: "webapp",
            description: "Online reserveringssysteem met real-time beschikbaarheid",
            technologies: ["React", "Firebase", "Stripe"],
            results: "60% meer boekingen",
            year: "2023"
        }
    ];

    const categories = [
        { id: "all", name: "Alle projecten" },
        { id: "website", name: "Websites" },
        { id: "ecommerce", name: "E-commerce" },
        { id: "webapp", name: "Web applicaties" }
    ];

    const filteredProjects = activeTab === "all"
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <section id="portfolio" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-800">
            <div className="container">
                {/* Clean section header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                        Recent werk
                    </h2>
                    <p className="text-lg text-body-color dark:text-body-color-dark leading-relaxed">
                        Een selectie van projecten die ik recent heb opgeleverd voor verschillende klanten.
                    </p>
                </div>

                {/* Minimal filter tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                activeTab === category.id
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Clean projects grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Project preview area */}
                            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">💻</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{project.year}</div>
                                </div>
                            </div>

                            {/* Project details */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-black dark:text-white">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                    {project.results}
                  </span>
                                </div>

                                <p className="text-body-color dark:text-body-color-dark mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Professional CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md bg-black dark:bg-white px-8 py-4 text-lg font-semibold text-white dark:text-black transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-100"
                    >
                        Start jouw project
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
                        Jouw project verdient ook professionele uitvoering
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;