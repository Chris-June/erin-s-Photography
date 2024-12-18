import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    description: string
    detailedDescription: string
    whyAndyCares: string
  }
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-midnight/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={e => e.stopPropagation()}
          className="bg-gradient-to-br from-charcoal/90 via-midnight/90 to-charcoal/90 backdrop-blur-md rounded-lg p-6 md:p-8 max-w-2xl w-full border border-border/20 shadow-xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-silver/60 hover:text-copper transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-gradient">
              {service.title}
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-silver/80 leading-relaxed">
                {service.detailedDescription}
              </p>

              <div className="mt-8 pt-6 border-t border-border/20">
                <h3 className="text-xl font-serif font-semibold text-copper mb-4">
                  Why Andy Cares
                </h3>
                <p className="text-silver/80 italic leading-relaxed">
                  {service.whyAndyCares}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-silver/60 hover:text-silver transition-colors"
              >
                Close
              </button>
              <Link
                to="/booking"
                className="px-6 py-2 hover-metallic rounded-md text-midnight font-medium"
              >
                Book Now
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceModal
