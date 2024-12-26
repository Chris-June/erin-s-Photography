import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../Button'

interface Service {
  title: string
  description: string
  icon: string
}

interface ExploreServicesModalProps {
  isOpen: boolean
  onClose: () => void
  services?: Service[]
}

const ExploreServicesModal: React.FC<ExploreServicesModalProps> = ({ 
  isOpen, 
  onClose, 
  services = [
    {
      title: 'Digital Image Enhancements',
      description: 'Professional post-processing to refine and perfect your images. This includes color correction, skin retouching, background adjustments, and removing unwanted elements to create flawless, magazine-quality photographs.',
      icon: '✨'
    },
    {
      title: 'Advanced Retouching',
      description: 'Specialized photo editing services that go beyond basic corrections. We offer professional-grade retouching for portraits, including skin smoothing, blemish removal, and subtle contouring while maintaining a natural look.',
      icon: '🖌️'
    },
    {
      title: 'Artistic Photo Compositing',
      description: 'Creative image manipulation to create unique, dreamlike scenes. We can blend multiple images, add artistic effects, or create fantastical compositions that transform your photographs into works of art.',
      icon: '🎨'
    },
    {
      title: 'Professional Print Preparation',
      description: 'Comprehensive print optimization services including color profiling, resolution enhancement, and format preparation for various print mediums - from fine art prints to large-scale commercial displays.',
      icon: '🖨️'
    },
    {
      title: 'Album and Photobook Design',
      description: 'Custom design and layout services for wedding, portrait, and event photo albums. We create beautifully curated, professionally designed photobooks that tell your unique story in a stunning, memorable format.',
      icon: '📖'
    },
    {
      title: 'Personal Branding Photography',
      description: 'Comprehensive personal branding photo sessions designed to capture your professional essence. We create a cohesive visual narrative that highlights your unique personality, skills, and professional identity across various platforms and marketing materials.',
      icon: '👔'
    }
  ]
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
          className="bg-gradient-to-br from-pastel-mauve/90 via-pastel-periwinkle/90 to-pastel-lilac/90 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-4xl w-full border border-border/20 shadow-floating"
        >
          {/* Content */}
          <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-4">
            <h2 className="text-4xl font-serif font-bold text-midnight text-center mb-8 sticky top-0 bg-gradient-to-br from-pastel-mauve/90 via-pastel-periwinkle/90 to-pastel-lilac/90 z-10 pb-4">
              Erin's Professional Photography Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-pastel-sky/20 rounded-2xl p-6 border border-pastel-lilac/30 hover:bg-pastel-sky/40 transition-all duration-300 shadow-floating"
                >
                  <div className="text-4xl mb-4 animate-pulse-glow">{service.icon}</div>
                  <h3 className="text-xl font-serif font-semibold text-copper mb-3">
                    {service.title}
                  </h3>
                  <p className="text-midnight/80 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sticky bottom-0 bg-gradient-to-br from-pastel-mauve/90 via-pastel-periwinkle/90 to-pastel-lilac/90 z-10 pt-4">
              <Button 
                onClick={onClose} 
                variant="outline"
                size="md"
                className="mx-auto"
              >
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ExploreServicesModal
