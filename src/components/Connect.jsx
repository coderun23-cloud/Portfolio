import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Connect() {
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

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/coderun23-cloud",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/natnael-getachew-798507256/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: faTelegram,
      href: "https://t.me/natigt23",
      label: "Telegram",
      color: "hover:text-blue-500",
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/_natigt23/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: faTwitter,
      href: "https://x.com/Natnael3611701",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-20 px-6"
      id="connect"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-4xl w-full">
        <motion.div className="text-center mb-16" variants={item}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            variants={item}
          >
            Let's Connect
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            variants={item}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mb-16 text-gray-300 text-center"
          variants={item}
        >
          Feel free to reach out and explore my work! I'm always open to new
          opportunities and collaborations.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl text-gray-400 ${social.color} transition-colors duration-300 flex flex-col items-center`}
                aria-label={social.label}
              >
                <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-gray-700/50 transition-all duration-300 mb-2">
                  <FontAwesomeIcon icon={social.icon} />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white mt-2">
                  {social.label}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
