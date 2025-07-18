import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                  className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                  data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Start jouw project vandaag
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Klaar voor een website die écht resultaten oplevert? Neem contact op voor een vrijblijvende consultatie en ontvang binnen 24 uur een op maat gemaakte offerte.
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Bedrijfsnaam *
                        </label>
                        <input
                            type="text"
                            placeholder="Jouw bedrijfsnaam"
                            className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          E-mailadres *
                        </label>
                        <input
                            type="email"
                            placeholder="jouw@email.nl"
                            className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                            htmlFor="phone"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Telefoonnummer
                        </label>
                        <input
                            type="tel"
                            placeholder="06 12345678"
                            className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                            htmlFor="budget"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Budget indicatie
                        </label>
                        <select
                            className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        >
                          <option value="">Selecteer budget</option>
                          <option value="€1.000 - €2.500">€1.000 - €2.500</option>
                          <option value="€2.500 - €5.000">€2.500 - €5.000</option>
                          <option value="€5.000 - €10.000">€5.000 - €10.000</option>
                          <option value="€10.000+">€10.000+</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Projectomschrijving *
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Vertel ons over jouw project: Wat voor website heb je nodig? Wat zijn jouw doelen? Heb je al een bestaande website?"
                            className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            required
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                        🚀 Verstuur aanvraag
                      </button>
                      <p className="mt-4 text-sm text-body-color">
                        * We nemen binnen 24 uur contact met je op
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-auto mb-12 max-w-[540px] text-center lg:mb-16">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-[32px]">
                    Waarom AK Web Solutions?
                  </h2>
                </div>

                <div className="mb-8">
                  <div className="mb-6 flex items-start">
                    <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12 2L13.09 8.26L19.29 2.05L21.95 4.71L15.74 10.91L22 12L15.74 13.09L21.95 19.29L19.29 21.95L13.09 15.74L12 22L10.91 15.74L4.71 21.95L2.05 19.29L8.26 13.09L2 12L8.26 10.91L2.05 4.71L4.71 2.05L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        Snelle levering
                      </h3>
                      <p className="text-body-color text-base">
                        Meeste projecten binnen 2-4 weken opgeleverd
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="mb-6 flex items-start">
                    <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 14.1 11 13 11V22H11V11C9.9 11 9 10.1 9 9V7L3 7V9H1V6C1 4.9 1.9 4 3 4H21C22.1 4 23 4.9 23 6V9H21Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        Persoonlijke aanpak
                      </h3>
                      <p className="text-body-color text-base">
                        Direct contact met de developer, geen tussenpersonen
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="mb-6 flex items-start">
                    <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H16V13H6V11"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        Continue support
                      </h3>
                      <p className="text-body-color text-base">
                        Ook na oplevering blijven wij beschikbaar voor vragen
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 rounded-xs bg-primary/5 p-6">
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    📞 Direct contact
                  </h3>
                  <div className="space-y-3">
                    <p className="flex items-center text-body-color">
                      <span className="mr-3">📧</span>
                      <a href="mailto:info@akwebsolutions.nl" className="hover:text-primary">
                        info@akwebsolutions.nl
                      </a>
                    </p>
                    <p className="flex items-center text-body-color">
                      <span className="mr-3">📱</span>
                      <a href="tel:+31612345678" className="hover:text-primary">
                        +31 (0)6 12345678
                      </a>
                    </p>
                    <p className="flex items-center text-body-color">
                      <span className="mr-3">🌐</span>
                      www.akwebsolutions.nl
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;