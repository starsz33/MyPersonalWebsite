import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../profile.jpeg';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 pt-20">
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            className="text-blue-400 text-sm tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi there 👋, I'm
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Uwingeneye <br /><span className="text-blue-400">Esther</span>
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'Networking Enthusiast', 2000,
                'Cybersecurity Enthusiast', 2000,
                'Full-Stack Developer', 2000,
              ]}
              repeat={Infinity}
              className="text-blue-300 font-semibold"
            />
          </motion.div>
          <motion.p
            className="max-w-lg text-gray-400 text-base leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Final-year Computer &amp; Software Engineering student passionate about building secure,
            scalable systems — from full-stack web apps to network infrastructure.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition">
              View Projects
            </a>
            <a href="#contact" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-full font-semibold transition">
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Uwingeneye_Esther_CV.pdf"
              className="border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-full font-semibold transition flex items-center gap-2"
            >
              <span>⬇️</span> Download CV
            </a>
          </motion.div>
        </div>
        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl shadow-blue-500/30">
            <img src={profileImg} alt="Esther" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
