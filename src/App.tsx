import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;