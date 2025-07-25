import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
} from "../components/Icons"; // You'll need to create or import these icons

function Resume() {
  const resumePdf = "/assets/My CVResume.pdf";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  const iconHover = {
    scale: 1.2,
    transition: { duration: 0.2 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16 flex-grow">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          {/* Resume Header */}
          <motion.div
            variants={sectionVariants}
            className="text-center mb-12 p-10"
          >
            <motion.h1
              className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              NATNAEL GETACHEW
            </motion.h1>
            <motion.h2
              className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              FULL STACK WEB DEVELOPER
            </motion.h2>
            <div className="mt-8">
              <motion.a
                href={resumePdf}
                download="Resume.pdf"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
                className="inline-block relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-6 py-3 bg-gray-900 rounded-lg border border-gray-700 text-lg">
                  Download Resume
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Resume Sections */}
          <div className="space-y-12 px-8 pb-10">
            {/* Contact Section */}
            <motion.div
              variants={sectionVariants}
              className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 border-b border-gray-700 pb-2 mb-4">
                CONTACT
              </motion.h3>
              <motion.div className="space-y-3" variants={fadeIn}>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <span>+251982847827</span>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                  <span>ngetachew277@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-5 h-5 text-blue-400" />
                  <span>Addis Ababa</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              variants={sectionVariants}
              className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 border-b border-gray-700 pb-2 mb-4">
                PROFILE
              </motion.h3>
              <motion.p variants={fadeIn} className="text-gray-300">
                Detail-oriented and innovative web developer with hands-on
                experience building responsive, full-stack applications. Skilled
                in Laravel, React.js, MySQL, Tailwind CSS, Bootstrap, and
                RESTful APIs, with practical knowledge of Postman for API
                testing and debugging. A natural collaborator who thrives in
                team settings—both in tech and in sports—bringing strong
                communication, adaptability, and strategic thinking from soccer
                and basketball into every development project. Committed to
                creating scalable, user-focused solutions that drive real-world
                impact.
              </motion.p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              variants={sectionVariants}
              className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 border-b border-gray-700 pb-2 mb-4">
                EDUCATION
              </motion.h3>
              <motion.div variants={fadeIn}>
                <h4 className="font-bold text-blue-300">
                  2021 - 2025 • ST MARY'S UNIVERSITY
                </h4>
                <div className="mt-2 text-gray-300 space-y-1">
                  <p>Bachelor of Computer Science</p>
                  <p>GPA: 3.6/4.0</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={sectionVariants}
              className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 border-b border-gray-700 pb-2 mb-4">
                SKILLS
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={fadeIn}
              >
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">
                    Technical Skills
                  </h4>
                  <div className="space-y-1 text-gray-300">
                    <p>Laravel</p>
                    <p>React JS</p>
                    <p>Tailwind CSS and Bootstrap</p>
                    <p>MySQL</p>
                    <p>PHP</p>
                    <p>Javascript</p>
                    <p>GitHub/Git</p>
                    <p>Postman</p>
                    <p>REST API</p>
                    <p>C++ Programming</p>
                    <p>Python</p>
                    <p>API Integration</p>
                    <p>Software Documentation</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Other Skills</h4>
                  <div className="space-y-1 text-gray-300">
                    <p>Adaptability</p>
                    <p>Problem Solving</p>
                    <p>Teamwork</p>
                    <p> Collaboration</p>
                    <p>Time Management</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Work Experience Section */}
            <motion.div
              variants={sectionVariants}
              className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 border-b border-gray-700 pb-2 mb-4">
                WORK EXPERIENCE
              </motion.h3>
              <motion.div variants={fadeIn}>
                <h4 className="font-bold text-blue-300">
                  Adika Taxi Services PLC.
                </h4>
                <p className="text-purple-300 mb-2">Full Stack Web Developer</p>
                <div className="space-y-2 text-gray-300">
                  <p>
                    Designed and developed a full-stack driver registration
                    system at Adika Taxi PLC—leveraging Laravel for RESTful API
                    development and backend logic, React.js with JSX for dynamic
                    user interfaces, MySQL for structured data management, and
                    Tailwind CSS alongside Bootstrap for responsive and modular
                    styling.
                  </p>
                  <p>
                    Utilized Postman extensively to test, debug, and document
                    API endpoints, ensuring robust integration between frontend
                    and backend components.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Languages Section */}
            <motion.div
              variants={sectionVariants}
              className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 border-b border-gray-700 pb-2 mb-4">
                LANGUAGES
              </motion.h3>
              <motion.div className="text-gray-300" variants={fadeIn}>
                <p>English (Fluent)</p>
                <p>Amharic (Native)</p>
              </motion.div>
            </motion.div>

            {/* Online Presence Section */}
            <motion.div
              variants={sectionVariants}
              className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 border-b border-gray-700 pb-2 mb-4">
                ONLINE PRESENCE
              </motion.h3>
              <motion.div className="flex gap-6" variants={fadeIn}>
                <motion.a
                  href="https://github.com/coderun23-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                  whileHover={iconHover}
                >
                  <GithubIcon className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/natnael-getachew-798507256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                  whileHover={iconHover}
                >
                  <LinkedinIcon className="w-8 h-8" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
