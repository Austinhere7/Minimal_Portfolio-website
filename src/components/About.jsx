import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl leading-relaxed">
            I'm a Full Stack Developer specializing in responsive UI design and modern web technologies. 
            With proficiency in React.js, Node.js, Vite, and Vue.js, I build scalable and performant 
            applications. I'm passionate about creating seamless user experiences and staying updated 
            with the latest industry trends.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">
                    Bachelor of Technology in Computer Science and Engineering
                  </h4>
                  <p className="text-gray-300 mb-2">Christ College of Engineering</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      2023 - 2027
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Kerala, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">
                    Higher Secondary Education
                  </h4>
                  <p className="text-gray-300 mb-2">Carmel Higher Secondary School</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      2021 - 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
