import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">Who I am</p>
          <h2 className="text-3xl font-bold text-white mb-6">About <span className="text-blue-400">Me</span></h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            I'm a final-year Computer &amp; Software Engineering student at the University of Rwanda with a
            strong foundation in full-stack development,networking and cybersecurity.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            I enjoy solving real-world problems through technology — whether it's building mobile apps with Flutter,
            designing REST APIs with Node.js, or securing network infrastructure. I'm driven by curiosity,
            continuous learning, and a desire to make meaningful impact through software.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Location', value: 'Kigali, Rwanda 🇷🇼' },
            { label: 'Degree', value: 'BSc. Computer & Software Eng.' },
            { label: 'Focus', value: 'Full-Stack & Networking Engineer' },
            { label: 'Status', value: 'Open to Opportunities ✅' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <p className="text-blue-400 text-xs uppercase tracking-wider mb-1">{label}</p>
              <p className="text-white text-sm font-medium">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
