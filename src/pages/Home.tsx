import { motion } from 'framer-motion'
import { useState } from 'react'

import ServiceModal from '../components/modals/ServiceModal'
import ContactForm from '../components/contact/ContactForm'
import ParallaxSection from '../components/ParallaxSection'
import Button from '../components/Button'
import ExploreServicesModal from '../components/modals/ExploreServices'

const Home = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isExploreServicesOpen, setIsExploreServicesOpen] = useState(false)

  const services = [
    {
      title: 'Weddings',
      description: 'Capturing the magic of your special day with artistic elegance.',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1920&q=80',
      icon: '💑',
      detailedDescription: "Your wedding day is a masterpiece waiting to be captured. With an artistic eye and years of experience, I specialize in documenting every precious moment - from the subtle glances and tender touches to the grand celebrations. My unobtrusive approach ensures that every genuine emotion and spontaneous moment is preserved forever in stunning detail.",
      whyErinCares: "Weddings are more than just events to me - they're the beginning of a new chapter in life's greatest love stories. Having photographed countless celebrations, I've learned that each wedding has its own unique soul. My passion lies in discovering and capturing the distinctive essence of your love story, creating timeless images that will move you just as deeply years from now as they do today."
    },
    {
      title: 'Portraits',
      description: 'Professional headshots and personal portraits that tell your story.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1920&q=80',
      icon: '📸',
      detailedDescription: "A portrait is more than just an image - it's a gateway to your personality, your achievements, and your dreams. Whether you need professional headshots that command respect in your industry or personal portraits that capture your authentic self, my approach combines technical excellence with artistic vision to create images that truly represent who you are.",
      whyErinCares: "Every face tells a story, and as a portrait photographer, I'm privileged to be the storyteller. I believe that everyone deserves to see themselves in their best light, not just physically, but in a way that captures their spirit. My greatest joy comes from the moment when clients see their portraits and recognize their own beauty and strength reflected back at them."
    },
    {
      title: 'Events',
      description: 'Documenting your celebrations and corporate gatherings.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80',
      icon: '🎉',
      detailedDescription: "Events are living, breathing stories unfolding in real-time. From intimate gatherings to grand corporate functions, I capture the energy, connections, and meaningful moments that make each event special. My documentary-style approach ensures that no significant moment goes unnoticed, while my artistic touch transforms simple photographs into compelling visual narratives.",
      whyErinCares: "Events are where memories are made, where connections are forged, and where moments become milestones. As someone who has spent years documenting these occasions, I've learned that the true value of event photography lies not just in recording what happened, but in capturing the feeling of being there. My mission is to create images that transport you back to those special moments, allowing you to relive the joy, excitement, and emotion time and time again."
    }
  ]

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-mauve-periwinkle">
      <div className="flex-grow container mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-copper leading-tight gradient-text">
            Erin's Photography
          </h1>
          <p className="text-xl text-midnight/80 leading-relaxed">
            Capturing life's beautiful moments with artistic vision and emotional depth
          </p>
          <div className="flex space-x-4">
            <Button 
              variant="soft"
              size="lg"
              onClick={() => setIsExploreServicesOpen(true)}
              className="shadow-floating"
            >
              Explore Services
            </Button>
          </div>
        </div>
        <div className="relative">
          <ParallaxSection
            image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80"
            title="Erin's Photography"
            description="Capturing Life's Beautiful Moments with Artistic Vision"
            height="500px"
            position="center"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Services Sections with Parallax */}
      {services.map((service, index) => (
        <div key={index} className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
                <h2 className="text-3xl font-serif font-semibold text-copper">
                  {service.title}
                </h2>
                <p className="text-lg text-midnight/80 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  onClick={() => setSelectedService(index)}
                  variant="outline"
                  size="md"
                  className="shadow-floating"
                >
                  Learn More
                </Button>
              </div>
              <div>
                <ParallaxSection
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  height="400px"
                  position="center"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
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
            <Button 
              onClick={() => setIsContactFormOpen(true)}
              variant="soft"
              size="lg"
              className="shadow-floating"
            >
              Get in Touch
            </Button>
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
      <ExploreServicesModal 
        isOpen={isExploreServicesOpen}
        onClose={() => setIsExploreServicesOpen(false)}
        services={services}
      />
    </div>
  )
}

export default Home
