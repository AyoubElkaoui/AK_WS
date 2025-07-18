import Image from "next/image";

const AboutSectionTwo = () => {
  return (
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                  className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                  data-wow-delay=".15s"
              >
                <Image
                    src="/images/about/about-image-2.svg"
                    alt="AK Web Solutions development proces"
                    fill
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                    src="/images/about/about-image-2-dark.svg"
                    alt="AK Web Solutions development proces"
                    fill
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Moderne Technologieën
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Wij werken met de nieuwste web technologieën zoals Next.js 15, React 19,
                    TypeScript en Tailwind CSS. Dit zorgt voor snelle, veilige en
                    toekomstbestendige websites.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Resultaatgericht Proces
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Van strategische planning tot implementatie en optimalisatie -
                    elk project wordt uitgevoerd met focus op jouw bedrijfsdoelen
                    en het aantrekken van meer klanten.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Continue Ondersteuning
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Ook na oplevering blijven wij beschikbaar voor onderhoud,
                    updates en uitbreidingen. Jouw succes is ons succes, dus
                    zorgen wij dat alles blijft werken zoals het hoort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSectionTwo;