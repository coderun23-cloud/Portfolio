import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  DatabaseIcon,
  ServerIcon,
  WifiIcon,
  ChartBarIcon

} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function About() {
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

const aboutPoints = [
  {
    text: "I'm Natnael Getachew, a full stack developer crafting responsive apps with Laravel, React.js, MySQL, and Tailwind CSS. I focus on clean architecture, dynamic UIs, and smart backend logic.",
    icon: <CodeBracketIcon className="w-8 h-8 text-blue-400" />,
  },
  {
    text: "I build sleek, high-performance websites—debugging APIs, managing data, and designing intuitive interfaces with precision.",
    icon: <CpuChipIcon className="w-8 h-8 text-purple-400" />,
  },
  {
    text: "I bring teamwork and strategy from sports to dev life, adapting fast, solving problems, and growing my skill set constantly.",
    icon: <PuzzlePieceIcon className="w-8 h-8 text-green-400" />,
  },
  {
    text: "Always learning, I dive into new frameworks to build powerful apps with real-world impact and standout usability.",
    icon: <LightBulbIcon className="w-8 h-8 text-yellow-400" />,
  },

  // ✅ Added — Network Automation & Networking focus
  {
    text: "I specialize in network automation using Ansible, writing repeatable and reliable playbooks to configure, validate, and manage network devices.",
    icon: <ServerIcon className="w-8 h-8 text-cyan-400" />,
  },
  {
    text: "I use NetBox as a Source of Truth to model network inventory, IP addressing, and device metadata for automated workflows.",
    icon: <DatabaseIcon className="w-8 h-8 text-indigo-400" />,
  },
  {
    text: "I work with Cisco networking and wireless technologies, focusing on structured configuration, consistency, and operational best practices.",
    icon: <WifiIcon className="w-8 h-8 text-sky-400" />,
  },
  {
    text: "I integrate monitoring and visibility into network operations to track device status, performance, and reliability.",
    icon: <ChartBarIcon className="w-8 h-8 text-green-400" />,
  },
];


  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="w-full max-w-4xl">
        <motion.div className="text-center mb-16" variants={item}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            variants={item}
          >
            About Me
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            variants={item}
          />
        </motion.div>

        <div className="space-y-6">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              className="relative pl-16 pr-8 py-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              variants={item}
              whileHover={{ y: -3 }}
            >
              <div className="absolute left-6 top-6 p-2 bg-gray-900 rounded-lg border border-gray-700">
                {point.icon}
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 flex justify-center" variants={item}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative px-8 py-3 bg-gray-900 rounded-lg border border-gray-700 leading-none flex items-center gap-2">
              <Link to="/projects">Explore My Work</Link>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
