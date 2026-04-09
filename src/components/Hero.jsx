import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
      <motion.p
        className="text-blue-400 text-sm tracking-widest uppercase mb-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to my portfolio
      </motion.p>
      <motion.h1
        className="text-5xl md:text-7xl font-black text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        UWINGENEYE <span className="text-blue-400">ESTHER</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Software Engineer &nbsp;|&nbsp; Networking &amp; Cybersecurity Enthusiast
      </motion.p>
      <motion.p
        className="max-w-xl text-gray-400 text-base leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Final-year Computer &amp; Software Engineering student passionate about building secure,
        scalable systems — from full-stack web apps to network infrastructure.
      </motion.p>
      <motion.div
        className="flex gap-4"
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
      </motion.div>
    </section>
  );
}
