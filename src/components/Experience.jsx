import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Lenient Tree',
      location: 'Kochi, Kerala',
      period: 'Recent',
      description: 'Led UI/UX and frontend development, delivering clean interfaces and optimized user experience. Collaborated with cross-functional teams to implement responsive designs and improve application performance.'
    },
    {
      title: 'Intern',
      company: 'iStudio Technologies',
      location: 'Remote',
      period: 'Previous',
      description: 'Designed user-centric interfaces and collaborated with the development team to translate design concepts into functional web applications. Gained hands-on experience with modern frontend frameworks and design tools.'
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mb-12"></div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-xl border-2 border-gray-700 hover:border-primary transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Briefcase size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-2xl mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg mb-2">{exp.company}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
