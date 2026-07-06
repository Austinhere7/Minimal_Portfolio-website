import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold text-lg">Austin Shajan</span>
          </div>
          
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Designed & Built with <Heart className="text-primary fill-primary" size={16} /> by Austin Shajan
          </p>
          
          <p className="text-gray-400 text-sm">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
