import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
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
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const cardHover = {
  y: -5,
  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
};

function Service() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={cardHover}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-all flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden border-b border-gray-700">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Service;
