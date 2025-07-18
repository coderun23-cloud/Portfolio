import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Bill",
      description:
        "A full-stack electricity billing system built using Laravel (API) and React for the frontend, styled with Tailwind CSS. The system includes secure authentication with Laravel Sanctum, user role management, real-time bill tracking, automated bill generation, and payment integration. API endpoints were tested and documented using Postman.",
      image: "/smartbill.png",
      tags: [
        "Laravel",
        "React",
        "Chart.js",
        "TailWindCSS",
        "REST API",
        "Chappa",
        "Sanctum SPA Authentication",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/coderun23-cloud/Smart_Bill",
    },
    {
      id: 2,
      title: "Adika Driver Registration System",
      description:
        "A driver registration and tracking platform for Adika, developed using Laravel for backend and RestApi and  Reactjs for the frontend and TailwindCSS for styling .This system enable to regsiter a driver and manage it ",
      image: "/adikasite.png",
      tags: [
        "Laravel",
        "React",
        "Chart.js",
        "TailwindCSS",
        "REST API",
        "Sanctum SPA Authentication",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/coderun23-cloud/driver_registration",
    },
    {
      id: 3,
      title: "Personal Crypto Tracker",
      description:
        "Crypto Tracker is a modern web app that allows users to explore and monitor real-time cryptocurrency data. Built with React, it uses the CoinGecko API to fetch up-to-date prices, market cap, and historical data of the top cryptocurrencies.",
      image: "/crypto.png",
      tags: ["React", "CSS"],
      demoUrl: "https://personal-crypto-tracker.vercel.app",
      githubUrl: "https://github.com/coderun23-cloud/Personal-crypto-tracker",
    },
    {
      id: 4,
      title: "Smart Cart",
      description:
        "Smart Cart is a full-stack e-commerce platform built with React for the frontend and Laravel for a robust RESTful API backend. It provides a seamless shopping experience for users while offering powerful admin tools for business management.",
      image: "/smartcart.png",
      tags: [
        "Laravel",
        "React",
        "Chart.js",
        "TailwindCSS",
        "REST API",
        "Sanctum SPA Authentication",
        "Chappa",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/coderun23-cloud/SmartCart",
    },
    {
      id: 5,
      title: "Gym Management System",
      description:
        "MAV Gym is a full-stack gym management platform developed with React for the frontend and Laravel for the RESTful API backend. It offers an intuitive interface for members, trainers, and receptionists, and provides powerful admin tools for managing memberships, plans, schedules, and staff.",
      image: "/mavgym.png",
      tags: [
        "Laravel",
        "React",
        "Chart.js",
        "TailwindCSS",
        "REST API",
        "Sanctum SPA Authentication",
        "Chappa",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/coderun23-cloud/gym_manegement_system",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
              }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-all flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover border-b border-gray-700"
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-3 text-blue-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-900 text-blue-300 text-xs px-3 py-1 rounded-full border border-gray-700"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};
