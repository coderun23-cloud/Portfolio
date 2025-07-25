import { FaServer, FaChartPie } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDatabase } from "react-icons/fa";

import {
  CodeBracketIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icons: ["c++", "javascript", "php", "python", "sql"],
    },
    {
      title: "Development",
      icons: [
        "html5",
        "css3",
        "react",
        "bootstrap",
        "tailwindcss",
        "php",
        "laravel",
        "mysql",
        "api",
      ],
    },
    {
      title: "Tools",
      icons: ["postman", "chartjs", "github", "vscode", "vercel", "pycharm"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <motion.main
        className="container mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div className="text-center mb-16" variants={item}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            variants={item}
          >
            My Skills
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            variants={item}
          />
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <div key={categoryIndex} ref={ref}>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center md:text-left"
                >
                  {category.title}
                </motion.h2>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
                >
                  {category.icons.map((icon, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                      }}
                      title={icon.charAt(0).toUpperCase() + icon.slice(1)}
                      className="flex items-center justify-center bg-transparent rounded-xl w-50 h-43 border border-transparent bg-gradient-to-br from-gray-800 to-gray-900 p-[2px] hover:from-blue-500/30 hover:to-gray-900 transition-all shadow-md hover:shadow-blue-500/30"
                    >
                      {icon === "api" ? (
                        <FaServer
                          className="text-blue-400 text-6xl"
                          title="REST API"
                        />
                      ) : icon === "chartjs" ? (
                        <FaChartPie
                          className="text-purple-400 text-6xl"
                          title="Chart.js"
                        />
                      ) : icon === "sql" ? (
                        <FaDatabase
                          className="text-yellow-400 text-6xl"
                          title="SQL"
                        />
                      ) : (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                          alt={icon}
                          title={icon.charAt(0).toUpperCase() + icon.slice(1)}
                          className="w-20 h-20 object-contain"
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}

export default Skills;
