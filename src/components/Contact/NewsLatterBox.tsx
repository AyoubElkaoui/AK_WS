"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
      <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
        <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
          Gratis Website Scan
        </h3>
        <p className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed dark:border-white/25">
          Ontdek in 2 minuten hoe jouw huidige website scoort op snelheid, SEO en gebruiksvriendelijkheid.
          Inclusief concrete verbeterpunten!
        </p>
        <div>
          <input
              type="url"
              name="website"
              placeholder="https://jouwwebsite.nl"
              className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
          <input
              type="email"
              name="email"
              placeholder="jouw@email.nl voor het rapport"
              className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
          <input
              type="submit"
              value="🚀 Start Gratis Scan"
              className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
          />
          <p className="text-body-color dark:text-body-color-dark text-center text-base leading-relaxed">
            100% gratis, geen verplichtingen. Resultaten binnen 24 uur in je inbox.
          </p>
        </div>

        <div>
        <span className="absolute top-7 left-2">
          <svg
              width="57"
              height="65"
              viewBox="0 0 57 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                opacity="0.5"
                d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
                fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                  id="paint0_linear_1028_600"
                  x1="-18.3187"
                  y1="55.1044"
                  x2="37.161"
                  y2="15.3509"
                  gradientUnits="userSpaceOnUse"
              >
                <stop
                    stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    stopOpacity="0.62"
                />
                <stop
                    offset="1"
                    stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

          <span className="absolute bottom-24 left-1.5">
          <svg
              width="39"
              height="32"
              viewBox="0 0 39 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                opacity="0.5"
                d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
                fill="url(#paint0_linear_1028_601)"
            />
            <defs>
              <linearGradient
                  id="paint0_linear_1028_601"
                  x1="39.1948"
                  y1="38.335"
                  x2="10.6982"
                  y2="10.2511"
                  gradientUnits="userSpaceOnUse"
              >
                <stop
                    stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    stopOpacity="0.62"
                />
                <stop
                    offset="1"
                    stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

          <span className="absolute top-[140px] right-2">
          <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                opacity="0.5"
                d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
                fill="url(#paint0_linear_1028_602)"
            />
            <defs>
              <linearGradient
                  id="paint0_linear_1028_602"
                  x1="-0.571054"
                  y1="-37.1717"
                  x2="28.7937"
                  y2="26.7564"
                  gradientUnits="userSpaceOnUse"
              >
                <stop
                    stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    stopOpacity="0.62"
                />
                <stop
                    offset="1"
                    stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
        </div>
      </div>
  );
};

export default NewsLatterBox;