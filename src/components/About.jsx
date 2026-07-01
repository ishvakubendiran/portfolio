function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">About <span className="text-blue-400">Me</span></h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-blue-400 font-semibold text-lg mb-2">🎓 Education</h3>
          <p className="text-gray-300">B.E. Electronics and Communication Engineering</p>
          <p className="text-gray-400">SRM Valliammai Engineering College — CGPA: 7.5</p>
          <p className="text-gray-400">2022 - 2026</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-blue-400 font-semibold text-lg mb-2">💻 About</h3>
          <p className="text-gray-300 leading-relaxed">I am a recent Electronics and Communication Engineering graduate with a passion for software development. I build full-stack web applications using Java, Spring Boot, React, and MySQL, with hands-on experience in secure authentication and REST API design. Currently looking for my first opportunity as a Software Developer.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-blue-400 font-semibold text-lg mb-2">📍 Availability</h3>
          <p className="text-green-400 font-medium">✅ Available for immediate joining</p>
        </div>
      </div>
    </section>
  )
}

export default About