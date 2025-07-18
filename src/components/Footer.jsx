import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
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
      color: "text-gray-400 hover:text-gray-100",
    },
    {
      href: "https://www.linkedin.com/in/natnael-getachew-798507256/",
      icon: faLinkedin,
      label: "LinkedIn",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      href: "https://t.me/natigt23",
      icon: faTelegram,
      label: "Telegram",
      color: "text-blue-500 hover:text-blue-400",
    },
    {
      href: "https://www.instagram.com/_natigt23/",
      icon: faInstagram,
      label: "Instagram",
      color: "text-pink-500 hover:text-pink-400",
    },
    {
      href: "https://x.com/Natnael3611701",
      icon: faTwitter,
      label: "Twitter",
      color: "text-sky-400 hover:text-sky-300",
    },
  ];

  const quickLinks = [
    { href: "#hero", text: "Home" },
    { to: "/projects", text: "Projects" },
    { href: "#about", text: "About" },
    { href: "#contact", text: "Contact" },
  ];

  const contactInfo = [
    { icon: faEnvelope, text: "ngetachew277@gmail.com", type: "mailto" },
    { icon: faMapMarkerAlt, text: "Addis Ababa, Ethiopia", type: "text" },
  ];

  return (
    <motion.footer
      className="relative bg-gray-900 text-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8"
          variants={item}
        >
          <div className="relative group">
            <svg
              className="absolute -left-8 -top-8 w-16 h-16 text-blue-900 opacity-60 group-hover:opacity-80 transition-opacity"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Natnael Getachew
            </h2>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
            <p className="text-gray-500 text-sm mt-1">
              Building scalable, user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${social.color} transition-all`}
                aria-label={social.label}
                variants={item}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          variants={container}
        >
          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="relative"
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-blue-400 transition pl-4 flex items-center"
                    >
                      <svg
                        className="w-3 h-3 mr-2 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                      </svg>
                      {link.text}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition pl-4 flex items-center"
                    >
                      <svg
                        className="w-3 h-3 mr-2 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                      </svg>
                      {link.text}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Contact Me
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-900/30 transition-colors mt-1">
                    <FontAwesomeIcon
                      icon={info.icon}
                      className="text-blue-400 text-sm"
                    />
                  </div>
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

          {/* Newsletter */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                ></path>
              </svg>
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for updates and insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                <svg
                  className="w-5 h-5"
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
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm relative"
          variants={item}
        >
          <svg
            className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-900 opacity-40"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <p>
            © {new Date().getFullYear()} Natnael Getachew. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
