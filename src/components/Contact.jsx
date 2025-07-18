import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
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
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={item}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            variants={item}
          >
            Contact Me
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            variants={item}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold text-blue-300 mb-6">
              Get in Touch
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Have a project in mind or want to discuss opportunities? I'm
              always open to interesting collaborations and conversations.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <EnvelopeIcon className="w-6 h-6 text-blue-400" />,
                  text: "ngetachew277@gmail.com",
                  type: "mailto",
                },
                {
                  icon: <MapPinIcon className="w-6 h-6 text-blue-400" />,
                  text: "Addis Ababa, Ethiopia",
                  type: "text",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                    {contact.icon}
                  </div>
                  {contact.type === "mailto" ? (
                    <a
                      href={`mailto:${contact.text}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{contact.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            className="space-y-6 w-140"
            variants={item}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted (functionality to be implemented).");
            }}
          >
            {[
              {
                id: "name",
                label: "Your Name",
                type: "text",
                placeholder: "Your Name",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "Your email address",
              },
              {
                id: "subject",
                label: "Subject",
                type: "text",
                placeholder: "Project inquiry",
              },
            ].map((field, index) => (
              <motion.div key={index} variants={item}>
                <label
                  htmlFor={field.id}
                  className="block text-blue-300 mb-2 font-medium"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 placeholder-gray-500 transition-all"
                  placeholder={field.placeholder}
                  required
                />
              </motion.div>
            ))}

            <motion.div variants={item}>
              <label
                htmlFor="message"
                className="block text-blue-300 mb-2 font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 placeholder-gray-500 transition-all"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </motion.div>

            <motion.div variants={item} className="pt-2">
              <button
                type="submit"
                className="relative group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 w-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-lg">Send Message</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </div>
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
