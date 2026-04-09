import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'NIRDA (National Industrial Research & Development Agency)',
    period: '2024',
    desc: 'Contributed to software development projects, gaining hands-on experience in building and testing enterprise-level applications.',
  },
  {
    role: 'Teaching Assistant',
    company: 'University of Rwanda',
    period: '2023 – 2024',
    desc: 'Assisted in teaching programming and networking courses, supporting students with labs and assignments.',
  },
  {
    role: 'Irembo Services Agent',
    company: 'Irembo',
    period: '2022',
    desc: 'Provided digital government service support, helping citizens access e-government platforms.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-white mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Work <span className="text-blue-400">Experience</span>
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="border-l-2 border-blue-500 pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
            <p className="text-blue-400 text-sm mb-1">{exp.company} &middot; {exp.period}</p>
            <p className="text-gray-400 text-sm">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
