import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';

interface ParallaxSectionProps {
  image: string;
  title?: string;
  description?: string;
  height?: string;
  position?: 'left' | 'right' | 'center';
  overlay?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const ParallaxSection = ({
  image,
  title,
  description,
  height = '100vh',
  position = 'center',
  overlay = true,
  buttonText,
  onButtonClick,
  className = '',
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textPosition = {
    left: 'items-start text-left pl-8 md:pl-16',
    right: 'items-end text-right pr-8 md:pr-16',
    center: 'items-center text-center',
  };

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div 
      ref={ref} 
      className={`relative w-full overflow-hidden rounded-2xl my-8 mx-4 transition-all duration-300 shadow-floating ${className}`} 
      style={{ height }}
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div
          className="w-full h-full bg-cover bg-center transform rounded-2xl"
          style={{ backgroundImage: `url(${image})` }}
        />
        {overlay && (
          <motion.div 
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-2xl"
            style={{ opacity }}
          />
        )}
      </motion.div>

      {/* Absolute positioned button at bottom left */}
      {buttonText && onButtonClick && (
        <div className="absolute bottom-4 left-4 z-20">
          <Button 
            onClick={onButtonClick}
            variant="soft"
            size="md"
            className="shadow-lg"
          >
            {buttonText}
          </Button>
        </div>
      )}

      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`relative z-10 h-full flex flex-col justify-center ${textPosition[position]} px-8 md:px-16`}
        >
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 text-shadow-lg"
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-silver/90 max-w-xl text-shadow"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ParallaxSection;
