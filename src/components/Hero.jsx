import profilePhoto from '../assets/profile.jpeg'

function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-6 pt-16">
      <img src={profilePhoto} alt="Ishva" className="w-40 h-40 rounded-full object-cover border-2 border-blue-400 mb-6" />
      <p className="text-blue-400 text-lg font-medium mb-3 tracking-widest uppercase">Welcome to my portfolio</p>
      <h1 className="text-6xl font-bold mb-4 text-white">Hi, I'm <span className="text-blue-400">Ishva</span></h1>
      <h2 className="text-2xl text-gray-300 font-medium mb-6">Software Developer</h2>
      <p className="text-gray-400 max-w-xl text-lg mb-10 leading-relaxed">Entry-level Software Developer with hands-on experience building and deploying full-stack applications using Java, Spring Boot, React, and MySQL, featuring secure authentication and REST APIs. Currently looking for my first job opportunity.</p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">View My Projects</a>
        <a href="#contact" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">Contact Me</a>
      </div>
    </section>
  )
}

export default Hero