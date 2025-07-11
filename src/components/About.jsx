import { motion } from "framer-motion";

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

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12 mt-10"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="w-full max-w-6xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-12 text-blue-400 text-center "
          variants={item}
        >
          About Me
        </motion.h1>

        <div className="space-y-8 text-lg md:text-xl">
          {[
            "Hi, I'm Natnael Getachew — a detail-oriented full stack web developer with practical experience in building scalable, responsive applications using Laravel, React.js, MySQL, and Tailwind CSS. I specialize in clean architecture, dynamic UIs, and efficient backend logic that powers meaningful digital experiences.",
            "My passion lies in creating intuitive interfaces and performance-driven websites that blend technical excellence with sleek design. Whether it's debugging APIs with Postman or managing structured data with MySQL, I approach every project with precision and creativity.",
            "I thrive on collaboration and bring the teamwork and strategy I've honed on the soccer and basketball court into every development process. My strength lies in adapting quickly, solving problems effectively, and continuously expanding my tech skill set to stay ahead of trends.",
            "I'm constantly learning and exploring new frameworks and best practices to deliver modern, high-performing applications. Whether developing a full-stack registration system or refining digital interfaces, I'm driven by the impact great code can have on real-world usability.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-white leading-relaxed"
              variants={item}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
