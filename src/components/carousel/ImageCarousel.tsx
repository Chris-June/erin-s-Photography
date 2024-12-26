import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface Image {
  url: string
  alt: string
  category: string
}

interface ImageCarouselProps {
  images: Image[]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const carouselRef = useRef<HTMLDivElement>(null)

  // Duplicate the images array to create the infinite effect
  const extendedImages = [...images, ...images, ...images]

  // Calculate dimensions based on viewport
  const visibleSlides = 5
  const containerWidth = window.innerWidth
  const gap = 16
  const maxSlideWidth = 300
  const slideWidth = Math.min(
    (containerWidth - (gap * (visibleSlides - 1))) / visibleSlides,
    maxSlideWidth
  )
  const totalWidth = slideWidth * images.length

  // Define animate function with useCallback
  const animate = useCallback(async () => {
    if (!isPaused) {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: 5 * images.length,
          ease: "linear",
          repeat: Infinity,
          onUpdate: (latest: { x: number }) => {
            const progress = Math.abs(latest.x);
            const newIndex = Math.floor((progress / totalWidth) * images.length) % images.length;
            setCurrentIndex(newIndex);
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [isPaused, controls, totalWidth, images.length, setCurrentIndex])

  useEffect(() => {
    animate()
  }, [animate])

  useEffect(() => {
    const handleResize = () => {
      // Recalculate dimensions on window resize
      const newSlideWidth = Math.min(
        (window.innerWidth - (gap * (visibleSlides - 1))) / visibleSlides,
        maxSlideWidth
      )
      const newTotalWidth = newSlideWidth * images.length
      controls.set({ 
        x: 0,
        width: `${newTotalWidth * 3}px`
      }) // Reset position and update width
      animate() // Restart animation
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [images.length, gap, visibleSlides, animate, controls, maxSlideWidth])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const handleDotClick = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
    controls.start({
      x: -(totalWidth * (index / images.length)),
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    });
  };

  return (
    <div className="relative w-full">
      <div 
        className="w-full bg-gradient-to-br from-pastel-mauve/20 via-pastel-periwinkle/10 to-pastel-blush/20 py-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={carouselRef}
          className="w-full max-w-[100vw] overflow-hidden px-4 md:px-8"
        >
          <div
            className="overflow-hidden mx-auto"
          >
            <motion.div
              className="flex gap-4"
              animate={controls}
              style={{ width: `${totalWidth * 3}px` }}
            >
              {extendedImages.map((image, index) => (
                <motion.div
                  key={`${image.url}-${index}`}
                  className="relative flex-shrink-0 group"
                  style={{ width: `${slideWidth - gap}px` }}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-pastel-sky/20">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                        <p className="text-pastel-mauve text-xs mb-1">{image.category}</p>
                        <p className="text-pastel-periwinkle text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-pastel-blush w-4' : 'bg-pastel-sky/50'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
