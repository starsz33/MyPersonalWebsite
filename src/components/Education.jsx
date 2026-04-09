import { motion } from 'framer-motion';

const items = [
  {
    title: 'BSc. Computer & Software Engineering',
    sub: 'University of Rwanda',
    period: '2021 – 2025 (Expected)',
    type: 'education',
  },
  {
    title: 'CCNA – Cisco Certified Network Associate',
    sub: 'Cisco Networking Academy',
    period: '2023',
    type: 'cert',
  },
  {
    title: 'Cybersecurity Essentials',
    sub: 'Cisco Networking Academy',
    period: '2023',
    type: 'cert',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-white mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Education &amp; <span className="text-blue-400">Certifications</span>
      </motion.h2>
      <div className="space-y-5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl">{item.type === 'education' ? '🎓' : '📜'}</span>
            <div>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-blue-400 text-sm">{item.sub} &middot; {item.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
