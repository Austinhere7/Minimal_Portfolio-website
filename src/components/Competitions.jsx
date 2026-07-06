import { Trophy, Award, Medal } from 'lucide-react'
import { motion } from 'framer-motion'

const Competitions = () => {
  const achievements = [
    {
      icon: <Trophy size={24} />,
      title: 'ETH Mumbai 2026',
      description: 'Second Prize',
      type: 'prize'
    },
    {
      icon: <Award size={24} />,
      title: 'CineHack - National AI Hackathon',
      description: 'Participation',
      type: 'participation'
    },
    {
      icon: <Medal size={24} />,
      title: 'Base Hyperthon - Kochi',
      description: 'Special Recognition',
      type: 'recognition'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Relay Coding - Christ College of Engineering',
      description: 'Second Prize',
      type: 'prize'
    }
  ]

  const activities = [
    'Volunteering for BeachHack',
    'Web3 Kerala Summit Volunteer',
    'Lucidus\'26 Event Volunteer',
    'College Ambassador for Lenient Tree'
  ]

  return (
    <section id="competitions" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Achievements & Activities</h2>
          <div className="w-20 h-1 bg-primary mb-12"></div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Competitions & Hackathons</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800 p-5 rounded-xl border-2 border-gray-700 hover:border-primary transition-all flex items-start gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      achievement.type === 'prize' ? 'bg-primary text-white' :
                      achievement.type === 'recognition' ? 'bg-primary/20 text-primary' :
                      'bg-white/10 text-white'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{achievement.title}</h4>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Activities & Volunteering</h3>
              <div className="bg-gray-800 p-6 rounded-xl border-2 border-gray-700">
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <motion.li
                      key={activity}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Competitions
