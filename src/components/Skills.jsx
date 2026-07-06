import { Code, Database, Layout, Server } from 'lucide-react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'CSS3', 'HTML5']
    },
    {
      icon: <Layout size={24} />,
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Vite', 'Bootstrap']
    },
    {
      icon: <Server size={24} />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'LangChain', 'REST APIs']
    },
    {
      icon: <Database size={24} />,
      title: 'Databases',
      skills: ['MongoDB', 'Redis', 'PostgreSQL', 'MySQL']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border-2 border-gray-700 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {category.icon}
                </div>
                <h3 className="font-bold text-white text-xl mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
