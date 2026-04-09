import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Energy Management System',
    tech: ['React', 'Node.js', 'IoT', 'Docker'],
    desc: 'A full-stack system for monitoring and optimizing energy consumption in real time using IoT sensors and a web dashboard.',
    github: '#',
  },
  {
    title: 'Tutor Connect App',
    tech: ['Flutter', 'Firebase', 'Dart'],
    desc: 'A mobile app connecting students with tutors, featuring real-time chat, session booking, and profile management.',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-white mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-blue-400">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between hover:ring-2 hover:ring-blue-500 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <a href={p.github} className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
