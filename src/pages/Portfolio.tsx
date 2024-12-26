import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/carousel/ImageCarousel';
import ContactForm from '../components/contact/ContactForm';
import { useContactForm } from '../hooks/useContactForm';

interface Image {
  url: string;
  alt: string;
  category: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Nature'];
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();

  const portfolioImages: Image[] = [
    // Wedding Photos
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&w=800&q=80',
      alt: 'Wedding Ceremony - Couple exchanging vows',
      category: 'Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&w=800&q=80',
      alt: 'Wedding Reception - First Dance',
      category: 'Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&w=800&q=80',
      alt: 'Wedding Details - Rings and Flowers',
      category: 'Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&w=800&q=80',
      alt: 'Outdoor Wedding Ceremony',
      category: 'Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&w=800&q=80',
      alt: 'Wedding Party Celebration',
      category: 'Wedding'
    },

    // Portrait Photos
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=800&q=80',
      alt: 'Professional Portrait - Business Executive',
      category: 'Portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=800&q=80',
      alt: 'Portrait Photography - Creative Headshot',
      category: 'Portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&w=800&q=80',
      alt: 'Artistic Portrait - Natural Light',
      category: 'Portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&w=800&q=80',
      alt: 'Fashion Portrait - Studio Lighting',
      category: 'Portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&w=800&q=80',
      alt: 'Black and White Portrait',
      category: 'Portrait'
    },

    // Event Photos
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&w=800&q=80',
      alt: 'Corporate Event - Conference',
      category: 'Event'
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&w=800&q=80',
      alt: 'Music Concert Event',
      category: 'Event'
    },
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&w=800&q=80',
      alt: 'Tech Conference Presentation',
      category: 'Event'
    },
    {
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&w=800&q=80',
      alt: 'Birthday Party Celebration',
      category: 'Event'
    },
    {
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&w=800&q=80',
      alt: 'Festival and Light Show',
      category: 'Event'
    },

    // Nature Photos
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&w=800&q=80',
      alt: 'Nature Landscape - Mountain Range',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&w=800&q=80',
      alt: 'Nature Photography - Forest',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&w=800&q=80',
      alt: 'Sunset over Mountain Lake',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&w=800&q=80',
      alt: 'Dramatic Ocean Waves',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&w=800&q=80',
      alt: 'Autumn Forest Colors',
      category: 'Nature'
    }
  ];

  const filteredImages = selectedCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === selectedCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-16 pb-8">
        <h1 className="text-4xl md:text-6xl font-cormorant text-center mb-2">
          Portfolio
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Capturing moments that last forever
        </p>
      </div>

      {/* Category Filter */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border border-white/30 hover:border-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="w-full max-w-[90vw] mx-auto mb-16">
        <ImageCarousel images={filteredImages} />
      </div>

      {/* Contact CTA */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-cormorant mb-4">
          Ready to capture your special moments?
        </h2>
        <button
          onClick={openContactForm}
          className="inline-block px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Get in Touch
        </button>
      </div>

      {/* Contact Form */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </motion.div>
  );
};

export default Portfolio;
