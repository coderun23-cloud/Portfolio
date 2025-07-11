import { FaServer, FaChartPie } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "JavaScript", "PHP", "SQL"],
      icons: ["cplusplus", "javascript", "php", "mysql"],
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
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center text-blue-400"
        >
          My Skills
        </motion.h1>

        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <div key={categoryIndex} ref={ref}>
                <motion.h2
                  variants={titleVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="text-3xl font-semibold text-blue-300 mb-8 text-center md:text-left"
                >
                  {category.title}
                </motion.h2>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl w-36 h-36 sm:w-44 sm:h-44 hover:bg-gray-700 transition-all duration-300 shadow-md"
                    >
                      <div className="mb-2">
                        {category.icons[index] === "api" ? (
                          <FaServer className="text-blue-400 w-10 h-10" />
                        ) : category.icons[index] === "chartjs" ? (
                          <FaChartPie className="text-blue-400 w-10 h-10" />
                        ) : (
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${category.icons[index]}/${category.icons[index]}-original.svg`}
                            alt={skill}
                            className="w-12 h-12"
                          />
                        )}
                      </div>
                      <span className="text-sm text-gray-300 font-medium text-center">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Skills;
