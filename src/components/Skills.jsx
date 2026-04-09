import { motion } from 'framer-motion';

const skillGroups = [
  { label: 'Programming', skills: [{ name: 'Java', level: 80 }, { name: 'JavaScript', level: 85 }, { name: 'Python', level: 75 }, { name: 'Dart', level: 70 }, { name: 'PHP', level: 65 }] },
  { label: 'Web Development', skills: [{ name: 'React', level: 80 }, { name: 'Node.js', level: 75 }, { name: 'Express', level: 75 }] },
  { label: 'Mobile', skills: [{ name: 'Flutter', level: 75 }] },
  { label: 'Networking & Security', skills: [{ name: 'CCNA', level: 80 }, { name: 'Cybersecurity', level: 75 }] },
  { label: 'Tools', skills: [{ name: 'Docker', level: 65 }, { name: 'Git', level: 85 }, { name: 'Postman', level: 80 }, { name: 'Figma', level: 70 }] },
];

function SkillBar({ name, level, delay }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">What I know</p>
        <h2 className="text-3xl font-bold text-white mb-10">Skills &amp; <span className="text-blue-400">Technologies</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map(({ label, skills }, i) => (
            <motion.div
              key={label}
              className="bg-gray-800 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">{label}</h3>
              {skills.map((s, j) => <SkillBar key={s.name} name={s.name} level={s.level} delay={j * 0.1} />)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
