import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form service (e.g. Formspree)
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">Let's talk</p>
        <h2 className="text-3xl font-bold text-white mb-10">Get In <span className="text-blue-400">Touch</span></h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm open to opportunities, collaborations, or just a good tech conversation. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href="mailto:uwingeneye.esther@example.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition">
                <span className="text-xl">✉️</span>
                <span>uwingeneye.esther@example.com</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition">
                <span className="text-xl">🐛</span>
                <span>github.com/esther</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition">
                <span className="text-xl">💼</span>
                <span>linkedin.com/in/esther</span>
              </a>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text" placeholder="Your Name" required
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
            <input
              type="email" placeholder="Your Email" required
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
            <textarea
              rows={5} placeholder="Your Message" required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
            >
              {sent ? '✅ Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
