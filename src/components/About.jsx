import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>
      <motion.p
        className="text-gray-400 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a final-year Computer &amp; Software Engineering student at the University of Rwanda with a
        strong foundation in networking, cybersecurity, and full-stack development. I enjoy solving
        real-world problems through technology — whether it's building mobile apps with Flutter,
        designing REST APIs with Node.js, or securing network infrastructure. I'm driven by curiosity,
        continuous learning, and a desire to make meaningful impact through software.
      </motion.p>
    </section>
  );
}
