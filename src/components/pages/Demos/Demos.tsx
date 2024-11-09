import React from "react";
import { motion } from "framer-motion";
import { PinContainer } from "./Pin";
import { ArrowBigRightDash } from "lucide-react";
import { projects } from "./data/index";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

const Demos: React.FC = () => {
  const { language } = useLanguage();
  const translations =
    language === "es" ? esTranslations.exp : enTranslations.exp;

  return (
    <section className="py-24 bg-transparent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(123,210,225)] to-[rgb(123,210,225)]">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-300">{translations.subtitle}</p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {demos.map((project) => (
            <DemoCard key={project.id} {...project} />
          ))}
        </motion.div> */}
        <div className="flex flex-wrap items-center justify-center gap-16 p-4 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <PinContainer title={item.title} href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/proyectos/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="absolute bottom-0 z-10"
                    />
                  </div>

                  <h1 className="text-base font-bold lg:text-2xl md:text-xl line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="text-sm font-light lg:text-xl lg:font-normal line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mb-3 mt-7">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center">
                      <p className="flex text-sm lg:text-xl md:text-xs text-[rgb(156,240,255)]">
                        Check Live Site
                      </p>
                      <ArrowBigRightDash
                        className="ms-3"
                        color="rgb(156,240,255)"
                      />
                    </div>
                  </div>
                </PinContainer>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
