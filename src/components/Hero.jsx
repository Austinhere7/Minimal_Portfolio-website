import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 border-2 border-primary rounded-full mb-6">
              <span className="text-primary font-medium">👋 Hi everyone, I'm Austin Shajan</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Full Stack Developer
              <br />
              <span className="text-gradient">Based in Kerala</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              I'm a Full Stack Developer passionate about creating modern web applications 
              that not only meet functional requirements but also delight users and evoke 
              emotional connections. Specializing in React.js, Node.js, and cutting-edge web technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-dark px-6 py-3 rounded-lg hover:bg-primary transition-colors font-medium"
              >
                Get In Touch
                <ArrowRight size={20} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg border-2 border-white hover:border-primary hover:text-primary transition-colors font-medium"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-300 font-medium">Find me on:</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/austinshajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/austinshajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:austinshajan@gmail.com"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl border-4 border-white overflow-hidden bg-gradient-to-br from-primary/20 to-teal-500/20">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 lg:w-56 lg:h-56 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                      <span className="text-6xl lg:text-7xl">👨‍💻</span>
                    </div>
                    <p className="text-white font-bold text-xl">Austin Shajan</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-32 bg-primary rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
