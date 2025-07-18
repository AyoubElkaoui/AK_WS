import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
    {
        id: 1,
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                <path
                    opacity="0.5"
                    d="M20.5914 0.810547L37.5 8.03125V32.5L20.5914 39.1895L3.69141 32.5V8.03125L20.5914 0.810547Z"
                    fill="url(#paint0_linear_25:218)"
                />
                <path
                    d="M20.5914 0.810547L37.5 8.03125V32.5L20.5914 39.1895L3.69141 32.5V8.03125L20.5914 0.810547Z"
                    stroke="url(#paint1_linear_25:218)"
                    strokeWidth="0.6"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_25:218"
                        x1="20.5914"
                        y1="0.810547"
                        x2="20.5914"
                        y2="39.1895"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_25:218"
                        x1="20.5914"
                        y1="0.810547"
                        x2="20.5914"
                        y2="39.1895"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: "Next.js Development",
        paragraph:
            "Moderne, snelle websites gebouwd met Next.js 15 en React. Server-side rendering, perfecte SEO en optimale performance voor betere Google rankings.",
    },
    {
        id: 2,
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                <path
                    opacity="0.5"
                    d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
                />
                <rect width="28" height="28" rx="1" />
            </svg>
        ),
        title: "E-commerce Platforms",
        paragraph:
            "Krachtige webshops die verkopen. Van Shopify tot custom oplossingen - wij bouwen platforms die jouw omzet laten groeien met naadloze checkout flows.",
    },
    {
        id: 3,
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                <path
                    opacity="0.5"
                    d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0Z"
                    fill="url(#paint0_radial_271:253)"
                />
                <circle cx="20" cy="20" r="12" fill="url(#paint1_radial_271:253)"/>
                <defs>
                    <radialGradient
                        id="paint0_radial_271:253"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(20 20) rotate(90) scale(20)"
                    >
                        <stop stopColor="#4A6CF7" stopOpacity="0.47" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                        id="paint1_radial_271:253"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(20 20) rotate(90) scale(12)"
                    >
                        <stop stopColor="#4A6CF7" stopOpacity="0.47" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        ),
        title: "Web Applications",
        paragraph:
            "Custom web applicaties voor specifieke bedrijfsprocessen. Dashboard systemen, CRM oplossingen en API integraties die jouw workflow optimaliseren.",
    },
    {
        id: 4,
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                <path
                    opacity="0.5"
                    d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
                />
                <path
                    d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z"
                />
            </svg>
        ),
        title: "Performance Optimalisatie",
        paragraph:
            "Core Web Vitals verbetering, snelheidsoptimalisatie en SEO fine-tuning. Jouw website laadt razendsnel en scoort perfect in Google PageSpeed.",
    },
    {
        id: 5,
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                <path
                    opacity="0.5"
                    d="M18.9375 0.9375L2.8125 7.375V22.8125L18.9375 36.25L35.0625 22.8125V7.375L18.9375 0.9375Z"
                    fill="url(#paint0_linear_271:8)"
                />
                <path
                    d="M18.9375 0.9375L2.8125 7.375V22.8125L18.9375 36.25L35.0625 22.8125V7.375L18.9375 0.9375Z"
                    stroke="url(#paint1_linear_271:8)"
                    strokeWidth="0.75"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_271:8"
                        x1="18.9375"
                        y1="0.9375"
                        x2="18.9375"
                        y2="36.25"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" stopOpacity="0.47" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_271:8"
                        x1="18.9375"
                        y1="0.9375"
                        x2="18.9375"
                        y2="36.25"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: "Onderhoud & Support",
        paragraph:
            "24/7 monitoring, security updates en continue optimalisatie. Jouw website blijft veilig, snel en up-to-date zonder dat jij je er zorgen over hoeft te maken.",
    },
    {
        id: 6,
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                <path
                    opacity="0.5"
                    d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z"
                    fill="url(#paint0_linear_271:390)"
                />
                <path
                    d="M2.67949 10L20 0L37.3205 10M2.67949 10V30L20 40M2.67949 10L20 20M37.3205 10V30L20 40M37.3205 10L20 20M20 20V40"
                    stroke="url(#paint1_linear_271:390)"
                    strokeWidth="0.75"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_271:390"
                        x1="20"
                        y1="0"
                        x2="20"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" stopOpacity="0.47" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_271:390"
                        x1="20"
                        y1="0"
                        x2="20"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: "Strategische Consultancy",
        paragraph:
            "Digitale strategie advies, technische roadmaps en conversie optimalisatie. Wij helpen je de juiste technische keuzes maken voor langetermijn succes.",
    },
];

export default featuresData;