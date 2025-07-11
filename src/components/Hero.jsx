import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const [jobTitle, setJobTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const jobTitles = [
    "Fullstack Developer",
    "Laravel Developer",
    "React.js Developer",
    "Database Designer",
    "API Integration",
  ];

  useEffect(() => {
    const i = loopNum % jobTitles.length;
    const fullText = jobTitles[i];

    const timer = setTimeout(() => {
      setJobTitle(
        isDeleting
          ? fullText.substring(0, jobTitle.length - 1)
          : fullText.substring(0, jobTitle.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && jobTitle === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && jobTitle === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [jobTitle, isDeleting, loopNum]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <motion.main
      className="container mx-auto px-6"
      id="hero"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={item}
          >
            Hi There! <br />
            <span className="text-blue-400">I'M Natnael Getachew</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-blue-300 mb-8 h-10"
            variants={item}
          >
            {jobTitle}
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.a
            href="#contact"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
              Contact Me
            </button>
          </motion.a>
        </div>

        <motion.div
          className="flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <img
            src={heroImg}
            alt="Natnael Getachew"
            className="w-full max-w-xl rounded-lg shadow-lg bg-transparent object-cover"
          />
        </motion.div>
      </div>
    </motion.main>
  );
}
