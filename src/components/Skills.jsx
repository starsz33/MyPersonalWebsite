import { motion } from 'framer-motion';

const skillGroups = [
  { label: 'Programming', skills: ['Java', 'JavaScript', 'Dart', 'Python', 'PHP'] },
  { label: 'Web', skills: ['React', 'Node.js', 'Express'] },
  { label: 'Mobile', skills: ['Flutter'] },
  { label: 'Networking', skills: ['CCNA', 'Cybersecurity'] },
  { label: 'Tools', skills: ['Docker', 'Git', 'Postman', 'Figma'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-white mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Skills &amp; <span className="text-blue-400">Technologies</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map(({ label, skills }, i) => (
            <motion.div
              key={label}
              className="bg-gray-800 rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-blue-400 font-semibold mb-3">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
