import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-gray-950 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="text-center text-gray-600 text-sm py-6 border-t border-gray-800">
        © {new Date().getFullYear()} UWINGENEYE Esther. All rights reserved.
      </footer>
    </div>
  );
}
