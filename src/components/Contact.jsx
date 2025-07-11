import { motion } from "framer-motion";

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
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-400 text-center"
          variants={item}
        >
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold text-blue-300 mb-6">
              Get in Touch
            </h2>
            <p className="mb-6 text-lg">
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out — I’d love to hear from you!
            </p>
            <div className="space-y-4">
              {[
                { icon: "✉️", text: "ngetachew277@gmail.com" },
                { icon: "📱", text: "+251 982 847 827" },
                { icon: "📍", text: "Addis Ababa, Ethiopia" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-lg"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-blue-400 mr-4 text-xl">
                    {contact.icon}
                  </span>
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            className="space-y-6 w-full"
            variants={item}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted (functionality to be implemented).");
            }}
          >
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "Your name",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "your.email@example.com",
              },
              {
                id: "subject",
                label: "Subject",
                type: "text",
                placeholder: "What's this about?",
              },
            ].map((field, index) => (
              <motion.div key={index} variants={item}>
                <label htmlFor={field.id} className="block text-blue-300 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={field.placeholder}
                  required
                />
              </motion.div>
            ))}

            <motion.div variants={item}>
              <label htmlFor="message" className="block text-blue-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300 w-full md:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
