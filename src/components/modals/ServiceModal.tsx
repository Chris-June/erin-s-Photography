import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../Button'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    description: string
    detailedDescription: string
    whyErinCares: string
  }
}

const ServiceModal: React.FC<ServiceModalProps> = ({ 
  isOpen, 
  onClose, 
  service 
}) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-midnight/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-pastel-mauve/90 via-pastel-periwinkle/90 to-pastel-lilac/90 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-2xl w-full border border-border/20 shadow-floating"
        >
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-midnight">
              {service.title}
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-midnight/80 leading-relaxed">
                {service.detailedDescription}
              </p>

              <div className="mt-8 bg-pastel-lilac/10 p-6 rounded-2xl border border-pastel-lilac/30 shadow-floating ml-4">
                <h3 className="text-xl font-serif font-semibold text-copper mb-4">
                  Why Erin Cares
                </h3>
                <p className="text-midnight/80 italic leading-relaxed">
                  {service.whyErinCares}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-4">
              <Button 
                onClick={onClose} 
                variant="outline"
                size="md"
              >
                Close
              </Button>
              <Link to="/booking">
                <Button 
                  variant="primary"
                  size="md"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceModal
