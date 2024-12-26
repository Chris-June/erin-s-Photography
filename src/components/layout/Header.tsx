import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-midnight/80 backdrop-blur-sm border-b border-border/40 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold flex items-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pastel-mauve"
          >
            Erin's
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pastel-periwinkle ml-2 text-sm uppercase tracking-widest"
          >
            Photography
          </motion.span>
        </Link>
        
        <ul className="flex items-center space-x-8">
          <li>
            <Link to="/" className="text-pastel-sky hover:text-pastel-lilac transition-colors text-sm uppercase tracking-wider">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-pastel-sky hover:text-pastel-lilac transition-colors text-sm uppercase tracking-wider">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-pastel-sky hover:text-pastel-lilac transition-colors text-sm uppercase tracking-wider">
              Book Now
            </Link>
          </li>
          <li>
            <Link 
              to="/pricing" 
              className="px-6 py-2 bg-pastel-blush text-midnight rounded-md font-medium text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors"
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
