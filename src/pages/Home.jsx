import About from "../components/About";
import Connect from "../components/Connect";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-blue-950">
      {/* Background effects*/}
      <Header />
      <main className="pt-20">
        {" "}
        <Hero />
        <About />
        <Contact />
        <Connect />
        <Footer />
      </main>
    </div>
  );
}
