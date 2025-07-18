import { FaServer, FaChartPie } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CodeBracketIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "JavaScript", "PHP"],
      icons: ["cplusplus", "javascript", "php"],
    },
    {
      title: "Front End",
      skills: ["HTML", "CSS", "React", "Bootstrap", "Tailwind"],
      icons: ["html5", "css3", "react", "bootstrap", "tailwindcss"],
    },
    {
      title: "Back End",
      skills: ["PHP", "Laravel", "MySQL", "REST API"],
      icons: ["php", "laravel", "mysql", "api"],
    },
    {
      title: "Tools",
      skills: ["Postman", "Chart.js", "GitHub", "VS Code", "Vercel"],
      icons: ["postman", "chartjs", "github", "vscode", "vercel"],
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
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                      }}
                      className="flex items-center justify-center bg-gray-800 rounded-xl w-full aspect-square border-2 border-gray-700 hover:border-blue-400/30 transition-all "
                      title={skill} // Add title attribute for tooltip
                    >
                      {category.icons[index] === "api" ? (
                        <FaServer className="text-blue-400 text-5xl" />
                      ) : category.icons[index] === "chartjs" ? (
                        <FaChartPie className="text-purple-400 text-5xl" />
                      ) : (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${category.icons[index]}/${category.icons[index]}-original.svg`}
                          alt={skill}
                          className="w-16 h-16 object-contain"
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
