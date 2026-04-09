import { useState } from 'react';

const links = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-blue-400 font-bold text-xl tracking-tight">Esther<span className="text-white">.</span></span>
        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-400">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l}`} className="hover:text-blue-400 capitalize transition font-medium">{l}</a>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-gray-900 border-t border-gray-800 px-6 py-4 gap-4 text-sm text-gray-300">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l}`} className="hover:text-blue-400 capitalize transition" onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
