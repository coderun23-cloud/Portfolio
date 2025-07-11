import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
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
      href: "https://github.com/coderun23-cloud",
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/natnael-getachew-798507256/",
      icon: faLinkedin,
      label: "LinkedIn",
    },
    { href: "https://t.me/natigt23", icon: faTelegram, label: "Telegram" },
    {
      href: "https://www.instagram.com/_natigt23/",
      icon: faInstagram,
      label: "Instagram",
    },
    { href: "https://x.com/Natnael3611701", icon: faTwitter, label: "Twitter" },
  ];

  const quickLinks = [
    { href: "#hero", text: "Home" },
    { to: "/projects", text: "Projects" },
    { href: "#about", text: "About" },
    { href: "#contact", text: "Contact" },
  ];

  const contactInfo = [
    { icon: faEnvelope, text: "ngetachew277@gmail.com", type: "mailto" },
    { icon: faPhone, text: "+251 982 847 827", type: "text" },
    { icon: faMapMarkerAlt, text: "Addis Ababa, Ethiopia", type: "text" },
  ];

  return (
    <motion.footer
      className="bg-gray-900 text-white border-t border-blue-900 py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
          variants={item}
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Natnael Getachew
            </h2>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
            <p className="text-gray-500 text-sm mt-1">
              Building scalable, user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-2xl">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition opacity-80 hover:opacity-100"
                aria-label={social.label}
                variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={container}
        >
          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-blue-400 transition"
                    >
                      {link.text}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition"
                    >
                      {link.text}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Contact Me
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <FontAwesomeIcon icon={info.icon} className="text-gray-400" />
                  {info.type === "mailto" ? (
                    <a
                      href={`mailto:${info.text}`}
                      className="text-gray-400 hover:text-blue-400 transition"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{info.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          variants={item}
        >
          <p>
            © {new Date().getFullYear()} Natnael Getachew. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
