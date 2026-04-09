const links = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-blue-400 font-bold text-lg">Esther.</span>
        <ul className="hidden md:flex gap-6 text-sm text-gray-400">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l}`} className="hover:text-blue-400 capitalize transition">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
