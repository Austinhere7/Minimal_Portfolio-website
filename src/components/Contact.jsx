import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mb-12"></div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of the following channels or send me a message directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:austinshajan@gmail.com" className="text-white font-medium hover:text-primary transition-colors">
                      austinshajan@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+919876543210" className="text-white font-medium hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">Kerala, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-300 font-medium mb-4">Connect with me:</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/austinshajan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/austinshajan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-700 focus:border-primary focus:outline-none transition-colors bg-gray-900 text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-700 focus:border-primary focus:outline-none transition-colors bg-gray-900 text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-700 focus:border-primary focus:outline-none transition-colors bg-gray-900 text-white resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-dark px-6 py-3 rounded-lg hover:bg-primary transition-colors font-medium"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
