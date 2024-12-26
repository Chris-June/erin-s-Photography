import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="w-full bg-midnight/80 backdrop-blur-sm border-b border-border/40 fixed top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient"
          >
            Erin's
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-silver/60 ml-2 text-sm uppercase tracking-widest"
          >
            Photography
          </motion.span>
        </Link>
        
        <ul className="flex items-center space-x-12">
          <li>
            <Link to="/" className="text-silver/60 hover:text-copper transition-colors text-sm uppercase tracking-wider">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-silver/60 hover:text-copper transition-colors text-sm uppercase tracking-wider">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-silver/60 hover:text-copper transition-colors text-sm uppercase tracking-wider">
              Book Now
            </Link>
          </li>
          <li>
            <Link 
              to="/pricing" 
              className="px-6 py-2 hover-metallic rounded-md text-midnight font-medium text-sm uppercase tracking-wider"
            >
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
