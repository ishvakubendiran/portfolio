function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">My <span className="text-blue-400">Projects</span></h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">AI Resume Analyzer</h3>
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Live</span>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">A full-stack AI-powered resume analyzer with JWT authentication, PDF upload, ATS scoring, and scan history. Integrates LLaMA 3.3 70B via Groq API. Deployed on Render + Clever Cloud MySQL + Vercel.</p>
          <div className="flex flex-wrap gap-2 mb-6">
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">React</span>
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Spring Boot</span>
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Spring Security</span>
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">JWT</span>
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">MySQL</span>
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Docker</span>
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Groq API</span>
           <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ishvakubendiran/ai-resume-analyzer" target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300">GitHub</a>
            <a href="https://ai-resume-analyzer-flame-gamma.vercel.app" target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300">Live Demo</a>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">Employee Management System</h3>
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Live</span>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">A full-stack employee management application with secure JWT-based authentication and complete CRUD operations for managing employee records, built with React, Spring Boot, and MySQL.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">React</span>
            <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Spring Boot</span>
            <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Spring Security</span>
            <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">JWT</span>
            <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">MySQL</span>
            <span className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ishvakubendiran/emp-management-backend" target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300">Backend</a>
            <a href="https://github.com/ishvakubendiran/emp-management-frontend" target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300">Frontend</a>
            <a href="https://emp-management-frontend-jet.vercel.app" target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects