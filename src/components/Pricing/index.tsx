"use client";

import { useState } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "TechStart Dashboard",
      category: "webapp",
      description: "Moderne dashboard applicatie voor startup met real-time analytics",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      image: "/api/placeholder/600/400",
      results: "40% snellere workflows",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "ecommerce",
      description: "Volledig responsive webshop met geïntegreerd betaalsysteem",
      technologies: ["React", "Node.js", "Stripe"],
      image: "/api/placeholder/600/400",
      results: "3x meer conversies",
      link: "#"
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "website",
      description: "Professionele bedrijfswebsite met CMS en SEO optimalisatie",
      technologies: ["Next.js", "Sanity", "Vercel"],
      image: "/api/placeholder/600/400",
      results: "85% snellere laadtijden",
      link: "#"
    },
    {
      id: 4,
      title: "SaaS Landing Page",
      category: "website",
      description: "Converterende landing page voor SaaS startup",
      technologies: ["Next.js", "Framer Motion", "Tailwind"],
      image: "/api/placeholder/600/400",
      results: "25% hogere conversie",
      link: "#"
    },
    {
      id: 5,
      title: "Restaurant App",
      category: "webapp",
      description: "Bestel-app voor restaurant met real-time updates",
      technologies: ["React Native", "Firebase", "Stripe"],
      image: "/api/placeholder/600/400",
      results: "60% meer online orders",
      link: "#"
    }
  ];

  const categories = [
    { id: "all", name: "Alle Projecten", count: projects.length },
    { id: "website", name: "Websites", count: projects.filter(p => p.category === "website").length },
    { id: "ecommerce", name: "E-commerce", count: projects.filter(p => p.category === "ecommerce").length },
    { id: "webapp", name: "Web Apps", count: projects.filter(p => p.category === "webapp").length }
  ];

  const filteredProjects = activeTab === "all"
      ? projects
      : projects.filter(project => project.category === activeTab);

  return (
      <section id="portfolio" className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container">
          {/* Section Header */}
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary mb-6">
              <span className="mr-2">🎯</span>
              Bewezen Resultaten
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              Projecten die
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {" "}werken
            </span>
            </h2>
            <p className="text-xl text-body-color dark:text-body-color-dark leading-relaxed">
              Een kijkje in onze recente projecten en de resultaten die we voor klanten hebben behaald.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeTab === category.id
                            ? "bg-primary text-white shadow-lg"
                            : "bg-white dark:bg-gray-800 text-body-color dark:text-body-color-dark hover:bg-primary/10 border border-gray-200 dark:border-gray-700"
                    }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
                </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
                <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-4xl">🚀</div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <a
                          href={project.link}
                          className="inline-flex items-center px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
                      >
                        <span className="mr-2">👀</span>
                        Bekijk Project
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-xs font-medium text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                        {project.results}
                      </div>
                    </div>

                    <p className="text-body-color dark:text-body-color-dark mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                  </div>

                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10 blur-xl"></div>
                </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <a
                  href="#contact"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="mr-2">🚀</span>
                Start jouw project
                <svg
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <p className="text-body-color dark:text-body-color-dark">
                Jouw project kan hier ook staan • Vraag een offerte aan
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Portfolio;