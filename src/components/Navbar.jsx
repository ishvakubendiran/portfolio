function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-800 text-white px-8 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-blue-400 tracking-wide">Ishva</h1>
      <ul className="flex gap-2 list-none">
        <li><a href="#about" className="px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-300">About</a></li>
        <li><a href="#skills" className="px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-300">Skills</a></li>
        <li><a href="#projects" className="px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-300">Projects</a></li>
        <li><a href="#contact" className="px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-300">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar