import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Energy Management System',
    tech: ['React', 'Node.js', 'IoT', 'Docker'],
    desc: 'A full-stack system for monitoring and optimizing energy consumption in real time using IoT sensors and a web dashboard.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Tutor Connect App',
    tech: ['Flutter', 'Firebase', 'Dart'],
    desc: 'A mobile app connecting students with tutors, featuring real-time chat, session booking, and profile management.',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">What I've built</p>
        <h2 className="text-3xl font-bold text-white mb-10">Featured <span className="text-blue-400">Projects</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition">{p.title}</h3>
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map(t => (
                    <span key={t} className="bg-blue-950 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-800">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href={p.github} className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1">
                  🔗 GitHub
                </a>
                <a href={p.demo} className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1">
                  ▶️ Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
