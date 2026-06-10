function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Get In <span className="text-blue-400">Touch</span></h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">I am currently looking for job opportunities. If you have an opening or just want to say hi, feel free to reach out!</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:ishvakubendiran@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">Email Me</a>
          <a href="https://linkedin.com/in/ishva-kubendiran-52587b263" target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">LinkedIn</a>
          <a href="https://github.com/ishvakubendiran" target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact