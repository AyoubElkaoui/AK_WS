"use client";

import Link from "next/link";

const Hero = () => {
  return (
      <>
        <section
            id="home"
            className="relative z-10 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
                className="h-full w-full"
                style={{
                  backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
                  backgroundSize: '60px 60px'
                }}
            ></div>
          </div>

          {/* Single subtle accent */}
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>

          <div className="container relative z-10">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[900px] text-center">

                  {/* Professional badge */}
                  <div className="mb-8 inline-flex items-center rounded-md bg-white/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-300 border border-white/10">
                    Specialist in moderne webontwikkeling
                  </div>

                  <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                    Websites die
                    <span className="text-blue-400 font-normal">
                    {" "}resultaten opleveren
                  </span>
                  </h1>

                  <p className="mb-8 text-xl leading-relaxed text-gray-300 sm:text-2xl max-w-3xl mx-auto">
                    Van concept tot conversie. Ik bouw professionele websites die
                    jouw bedrijf online laten groeien en meer klanten aantrekken.
                  </p>

                  {/* Clean value props */}
                  <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">2-4 weken</div>
                      <div className="text-sm text-gray-400">Oplevering</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">100% op maat</div>
                      <div className="text-sm text-gray-400">Geen templates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">Direct contact</div>
                      <div className="text-sm text-gray-400">Met de developer</div>
                    </div>
                  </div>

                  {/* Clean CTA buttons */}
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
                    >
                      Vraag offerte aan
                    </Link>

                    <Link
                        href="#portfolio"
                        className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/5 hover:border-gray-500"
                    >
                      Bekijk portfolio
                    </Link>
                  </div>

                  {/* Professional indicators */}
                  <div className="mt-16 border-t border-gray-700 pt-8">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-white mb-1">Next.js</div>
                        <div className="text-xs text-gray-400">Framework</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white mb-1">TypeScript</div>
                        <div className="text-xs text-gray-400">Development</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white mb-1">Tailwind</div>
                        <div className="text-xs text-gray-400">Styling</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white mb-1">Vercel</div>
                        <div className="text-xs text-gray-400">Hosting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Hero;