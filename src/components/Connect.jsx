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
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/natnael-getachew-798507256/",
      label: "LinkedIn",
    },
    { icon: faTelegram, href: "https://t.me/natigt23", label: "Telegram" },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/_natigt23/",
      label: "Instagram",
    },
    { icon: faTwitter, href: "https://x.com/Natnael3611701", label: "Twitter" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
      id="connect"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-blue-400 text-center"
        variants={item}
      >
        You can find me on
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-12 text-white text-center"
        variants={item}
      >
        Feel free to{" "}
        <span className="text-blue-400 font-semibold">connect</span> with me and
        explore my work!
      </motion.p>

      <div className="flex flex-wrap gap-8 justify-center text-3xl md:text-4xl">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label={social.label}
            variants={item}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={social.icon} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
