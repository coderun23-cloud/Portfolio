import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

function Resume() {
  const resumePdf = "/assets/NATNAEL.pdf";

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

  const linkHover = {
    scale: 1.02,
    color: "#93c5fd", // lighter blue
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
            className="bg-blue-900 p-8 text-center"
          >
            <motion.h1
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              NATNAEL GETACHEW
            </motion.h1>
            <motion.h2
              className="text-2xl text-blue-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              FULL STACK WEB DEVELOPER
            </motion.h2>
            <div className="mt-6">
              <motion.a
                href={resumePdf}
                download="NATNAEL.pdf"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition duration-300"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Resume Sections */}
          <div className="p-8 space-y-12">
            {[
              {
                title: "CONTACT",
                content: (
                  <motion.ul className="space-y-2" variants={fadeIn}>
                    <li>Phone: +251982847827</li>
                    <li>Email: ngetachew277@gmail.com</li>
                    <li>Location: Addis Ababa</li>
                  </motion.ul>
                ),
              },
              {
                title: "PROFILE",
                content: (
                  <motion.p variants={fadeIn}>
                    Detail-oriented and innovative web developer with hands-on
                    experience building responsive, full-stack applications.
                    Skilled in Laravel, React.js, MySQL, Tailwind CSS,
                    Bootstrap, and RESTful APIs, with practical knowledge of
                    Postman for API testing and debugging. A natural
                    collaborator who thrives in team settings—both in tech and
                    in sports—bringing strong communication, adaptability, and
                    strategic thinking from soccer and basketball into every
                    development project. Committed to creating scalable,
                    user-focused solutions that drive real-world impact.
                  </motion.p>
                ),
              },
              {
                title: "EDUCATION",
                content: (
                  <motion.div variants={fadeIn}>
                    <h4 className="font-bold">
                      2021 - 2025 • ST MARY'S UNIVERSITY
                    </h4>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Bachelor of Computer Science</li>
                      <li>GPA: 3.6/4.0</li>
                    </ul>
                  </motion.div>
                ),
              },
              {
                title: "SKILLS",
                content: (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={fadeIn}
                  >
                    <div>
                      <h4 className="font-bold mb-2">Technical Skills</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Laravel</li>
                        <li>React JS</li>
                        <li>Tailwind CSS and Bootstrap</li>
                        <li>MySQL</li>
                        <li>GitHub/Git</li>
                        <li>Postman</li>
                        <li>REST API</li>
                        <li>C++ Programming</li>
                        <li>API Integration</li>
                        <li>Software Documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Other Skills</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Adaptability and Problem Solving</li>
                        <li>Teamwork and Collaboration</li>
                        <li>JavaScript and PHP</li>
                      </ul>
                    </div>
                  </motion.div>
                ),
              },
              {
                title: "WORK EXPERIENCE",
                content: (
                  <motion.div variants={fadeIn}>
                    <h4 className="font-bold">Adika Taxi Services PLC.</h4>
                    <p className="text-blue-300 mb-2">
                      Full Stack Web Developer
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Designed and developed a full-stack driver registration
                        system at Adika Taxi PLC—leveraging Laravel for RESTful
                        API development and backend logic, React.js with JSX for
                        dynamic user interfaces, MySQL for structured data
                        management, and Tailwind CSS alongside Bootstrap for
                        responsive and modular styling.
                      </li>
                      <li>
                        Utilized Postman extensively to test, debug, and
                        document API endpoints, ensuring robust integration
                        between frontend and backend components.
                      </li>
                    </ul>
                  </motion.div>
                ),
              },
              {
                title: "LANGUAGES",
                content: (
                  <motion.ul className="list-disc pl-5" variants={fadeIn}>
                    <li>English (Fluent)</li>
                    <li>Amharic (Native)</li>
                  </motion.ul>
                ),
              },
              {
                title: "ONLINE PRESENCE",
                content: (
                  <motion.ul className="space-y-2" variants={fadeIn}>
                    <li>
                      <motion.a
                        href="https://github.com/coderun23-cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                        whileHover={linkHover}
                      >
                        GitHub
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="https://www.linkedin.com/in/natnael-getachew-798507256/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                        whileHover={linkHover}
                      >
                        LinkedIn
                      </motion.a>
                    </li>
                  </motion.ul>
                ),
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                variants={sectionVariants}
                className="space-y-4"
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h3
                  className="text-2xl font-bold text-blue-400 border-b border-blue-500 pb-2"
                  whileHover={{ color: "#93c5fd" }} // lighter blue on hover
                >
                  {section.title}
                </motion.h3>
                {section.content}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
