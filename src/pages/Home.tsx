import { motion } from 'framer-motion'
import { useState } from 'react'

import ServiceModal from '../components/modals/ServiceModal'
import ContactForm from '../components/contact/ContactForm'
import ParallaxSection from '../components/ParallaxSection'

const Home = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const services = [
    {
      title: 'Weddings',
      description: 'Capturing the magic of your special day with artistic elegance.',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1920&q=80',
      icon: '💑',
      detailedDescription: "Your wedding day is a masterpiece waiting to be captured. With an artistic eye and years of experience, I specialize in documenting every precious moment - from the subtle glances and tender touches to the grand celebrations. My unobtrusive approach ensures that every genuine emotion and spontaneous moment is preserved forever in stunning detail.",
      whyAndyCares: "Weddings are more than just events to me - they're the beginning of a new chapter in life's greatest love stories. Having photographed countless celebrations, I've learned that each wedding has its own unique soul. My passion lies in discovering and capturing the distinctive essence of your love story, creating timeless images that will move you just as deeply years from now as they do today."
    },
    {
      title: 'Portraits',
      description: 'Professional headshots and personal portraits that tell your story.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1920&q=80',
      icon: '📸',
      detailedDescription: "A portrait is more than just an image - it's a gateway to your personality, your achievements, and your dreams. Whether you need professional headshots that command respect in your industry or personal portraits that capture your authentic self, my approach combines technical excellence with artistic vision to create images that truly represent who you are.",
      whyAndyCares: "Every face tells a story, and as a portrait photographer, I'm privileged to be the storyteller. I believe that everyone deserves to see themselves in their best light, not just physically, but in a way that captures their spirit. My greatest joy comes from the moment when clients see their portraits and recognize their own beauty and strength reflected back at them."
    },
    {
      title: 'Events',
      description: 'Documenting your celebrations and corporate gatherings.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80',
      icon: '🎉',
      detailedDescription: "Events are living, breathing stories unfolding in real-time. From intimate gatherings to grand corporate functions, I capture the energy, connections, and meaningful moments that make each event special. My documentary-style approach ensures that no significant moment goes unnoticed, while my artistic touch transforms simple photographs into compelling visual narratives.",
      whyAndyCares: "Events are where memories are made, where connections are forged, and where moments become milestones. As someone who has spent years documenting these occasions, I've learned that the true value of event photography lies not just in recording what happened, but in capturing the feeling of being there. My mission is to create images that transport you back to those special moments, allowing you to relive the joy, excitement, and emotion time and time again."
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80"
        title="Andy's Photography"
        description="Capturing Life's Beautiful Moments with Artistic Vision"
        height="100vh"
        position="center"
      />

      {/* Services Sections with Parallax */}
      {services.map((service, index) => (
        <div key={service.title}>
          <ParallaxSection
            image={service.image}
            title={service.title}
            description={service.description}
            height="80vh"
            position={index % 2 === 0 ? 'left' : 'right'}
          />
          
          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-16 bg-midnight/90 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <button
                  onClick={() => setSelectedService(index)}
                  className="group flex items-center gap-3 text-silver/80 hover:text-copper transition-colors mx-auto"
                >
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-midnight to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-lg text-silver/80 mb-8 max-w-2xl mx-auto">
              Let's work together to capture your special moments in a way that tells your unique story.
            </p>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-copper/80 to-copper text-white rounded-lg 
                       hover:from-copper hover:to-copper/90 transition-all duration-300 
                       transform hover:scale-105"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={services[selectedService]}
        />
      )}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  )
}

export default Home
