"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
      <>
        <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
                <div className="mb-12 max-w-[360px] lg:mb-16">
                  <Link href="/" className="mb-8 inline-block">
                    <div className="text-2xl font-bold text-black dark:text-white">
                      AK Web Solutions
                    </div>
                  </Link>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    Professionele webontwikkeling voor ambitieuze bedrijven.
                    Wij bouwen websites die niet alleen mooi zijn, maar ook écht resultaten opleveren.
                  </p>
                  <div className="flex items-center">
                    <a
                        href="https://linkedin.com"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          className="fill-current"
                      >
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                    <a
                        href="https://github.com"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          className="fill-current"
                      >
                        <path d="M9 0C4.02975 0 0 4.13211 0 9.22807C0 13.3068 2.58825 16.7591 6.17925 17.9852C6.62925 18.0735 6.825 17.7803 6.825 17.5345C6.825 17.3159 6.8115 16.6109 6.8115 15.8525C4.5 16.2953 3.915 15.2523 3.735 14.7075C3.63075 14.4277 3.195 13.6159 2.8125 13.3977C2.49375 13.2318 2.04375 12.789 2.79925 12.7755C3.51 12.762 4.00575 13.4534 4.185 13.7466C4.995 15.1955 6.28575 14.8061 6.86775 14.5602C6.9435 13.9686 7.19175 13.5795 7.47 13.3473C5.4405 13.1152 3.315 12.3307 3.315 8.78625C3.315 7.77955 3.63075 6.94591 4.2015 6.29718C4.1115 6.06545 3.7785 5.10955 4.2915 3.83127C4.2915 3.83127 5.04225 3.58545 6.825 4.77955C7.5525 4.57364 8.3325 4.47068 9.1125 4.47068C9.8925 4.47068 10.6725 4.57364 11.4 4.77955C13.1828 3.57227 13.9328 3.83127 13.9328 3.83127C14.4458 5.10955 14.1128 6.06545 14.0228 6.29718C14.5935 6.94591 14.9085 7.76636 14.9085 8.78625C14.9085 12.3443 12.7698 13.1152 10.7403 13.3473C11.0985 13.6705 11.3865 14.2886 11.3865 15.2523C11.3865 16.6245 11.373 17.7273 11.373 17.5345C11.373 17.7803 11.5688 18.087 12.0188 17.9852C15.5963 16.7591 18.1845 13.2932 18.1845 9.22807C18.1845 4.13211 14.1548 0 9 0Z"/>
                      </svg>
                    </a>
                    <a
                        href="mailto:info@akwebsolutions.nl"
                        aria-label="Email"
                        className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          className="fill-current"
                      >
                        <path d="M17 0H1C0.45 0 0 0.45 0 1V13C0 13.55 0.45 14 1 14H17C17.55 14 18 13.55 18 13V1C18 0.45 17.55 0 17 0ZM16 12H2V2.5L9 7.5L16 2.5V12ZM9 6L2 1H16L9 6Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                <div className="mb-12 lg:mb-16">
                  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                    Diensten
                  </h2>
                  <ul>
                    <li>
                      <Link
                          href="/#services"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link
                          href="/#services"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        E-commerce Platforms
                      </Link>
                    </li>
                    <li>
                      <Link
                          href="/#services"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        Web Applications
                      </Link>
                    </li>
                    <li>
                      <Link
                          href="/#services"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        Performance Optimalisatie
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                <div className="mb-12 lg:mb-16">
                  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                    Bedrijf
                  </h2>
                  <ul>
                    <li>
                      <Link
                          href="/about"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        Over Ons
                      </Link>
                    </li>
                    <li>
                      <Link
                          href="/blog"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                          href="/contact"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                          href="/#pricing"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        Prijzen
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                <div className="mb-12 lg:mb-16">
                  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                    Contact Info
                  </h2>
                  <ul>
                    <li className="mb-4">
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        📧 info@akwebsolutions.nl
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        📱 +31 (0)6 12345678
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        🌐 www.akwebsolutions.nl
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        📍 Nederland
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
            <div className="py-8">
              <p className="text-center text-base text-body-color dark:text-white">
                &copy; 2025 AK Web Solutions. Alle rechten voorbehouden.
                <span className="ml-2">
                Gebouwd met ❤️ en Next.js
              </span>
              </p>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute right-0 top-14 z-[-1]">
            <svg
                width="55"
                height="99"
                viewBox="0 0 55 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
              <mask
                  id="mask0_94:899"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="99"
                  height="99"
              >
                <circle
                    opacity="0.8"
                    cx="49.5"
                    cy="49.5"
                    r="49.5"
                    fill="#4A6CF7"
                />
              </mask>
              <g mask="url(#mask0_94:899)">
                <circle
                    opacity="0.8"
                    cx="49.5"
                    cy="49.5"
                    r="49.5"
                    fill="url(#paint0_radial_94:899)"
                />
                <g opacity="0.8" filter="url(#filter0_f_94:899)">
                  <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
                </g>
              </g>
              <defs>
                <filter
                    id="filter0_f_94:899"
                    x="12.4852"
                    y="-15.1763"
                    width="82.7646"
                    height="82.7646"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                  />
                  <feGaussianBlur
                      stdDeviation="10.5"
                      result="effect1_foregroundBlur_94:899"
                  />
                </filter>
                <radialGradient
                    id="paint0_radial_94:899"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
                >
                  <stop stopOpacity="0.47" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </footer>
      </>
  );
};

export default Footer;