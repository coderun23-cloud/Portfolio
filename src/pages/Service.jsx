import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion, AnimatePresence, stagger, useAnimate } from "framer-motion";
import fullstack from "../assets/web.png";
import api from "../assets/ap.png";
import db from "../assets/database.png";
import responsive from "../assets/resp.png";
import test from "../assets/test.png";
import payment from "../assets/payment.png";

const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "Build robust applications using Laravel for backend and React for frontend.",
    image: fullstack,
    link: "#",
  },
  {
    id: 2,
    title: "API Integration",
    description:
      "Seamlessly integrate third-party APIs to enhance functionality.",
    image: api,
    link: "#",
  },
  {
    id: 3,
    title: "Responsive Design",
    description:
      "Mobile-friendly designs with Tailwind CSS for optimal user experience.",
    image: responsive,
    link: "#",
  },
  {
    id: 4,
    title: "Database Design",
    description:
      "Scalable database schemas with MySQL, PostgreSQL, and MongoDB expertise.",
    image: db,
    link: "#",
  },
  {
    id: 5,
    title: "API Endpoint Testing",
    description: "Ensure reliability with Postman and automated test suites.",
    image: test,
    link: "#",
  },
  {
    id: 6,
    title: "Payment Gateway Integration",
    description:
      "Integrated Chappa payment gateway to enable secure and seamless transactions. Includes robust API handling, real-time transaction monitoring, and thorough testing with Postman and automated test suites to ensure reliability.",
    image: payment,
    link: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cardHover = {
  scale: 1.03,
  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
  transition: { type: "spring", stiffness: 300 },
};

function Service() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16 flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-400"
        >
          My Services
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all"
            >
              <motion.div
                className="h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Service;
