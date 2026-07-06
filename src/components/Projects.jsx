import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Lucidus\'26',
      description: 'Official College Management Fest Website. Led frontend design and full-stack development, creating a seamless event management platform.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Cinelenz',
      description: 'Social Media Threat Detection & Movie Reviews Web App. Built using APIs with engaging UI/UX, featuring sentiment analysis and threat detection.',
      tech: ['React', 'TailwindCSS', 'Chart.js', 'FastAPI', 'NLP', 'D3.js'],
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Pardon.AI Website',
      description: 'AI-powered assistive platform designed and developed with modern 3D animations and smooth interactions.',
      tech: ['Next.js', 'React', 'Three.js', 'GSAP', 'TailwindCSS'],
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Backend AI Chatbot',
      description: 'Built with LangChain and RAG (Retrieval Augmented Generation). Features conversation history, REST APIs for chat and document upload, with context storage using PostgreSQL + pgvector.',
      tech: ['LangChain', 'RAG', 'PostgreSQL', 'pgvector', 'REST APIs'],
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Web3Ads',
      description: 'Full-stack decentralized advertising platform that fairly distributes revenue. Features privacy-preserving ad tracking using Semaphore zkProofs and supports gasless transactions.',
      tech: ['React', 'Web3', 'Solidity', 'Semaphore'],
      links: { github: '#', demo: '#' }
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border-2 border-gray-700 hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ExternalLink size={24} />
                </div>
                
                <h3 className="font-bold text-white text-xl mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-white text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
