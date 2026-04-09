import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm open to opportunities, collaborations, or just a good tech conversation.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:uwingeneye.esther@example.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            ✉️ Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-full font-semibold transition"
          >
            GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
