import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Header from "../components/Header";

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
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-400">
          My Projects
        </h1>

        <motion.div
          className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map(
            ({ id, title, description, image, tags, demoUrl, githubUrl }) => (
              <motion.div
                key={id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col border border-transparent hover:border-blue-400 "
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                    <p className="text-gray-300 text-sm p-2">{description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="bg-blue-900 text-xs sm:text-sm px-3 py-1 rounded-full transition transform duration-200 cursor-pointer select-none hover:bg-blue-500"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center mt-4">
                    {demoUrl && demoUrl !== "#" && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center gap-1"
                      >
                        Demo
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </main>
    </div>
  );
};
