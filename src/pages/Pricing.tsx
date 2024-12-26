import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const packages = [
    {
      name: 'Basic',
      price: '$299',
      features: [
        '2-hour session',
        '50 edited photos',
        'Digital delivery',
        '1 location',
      ],
      bgGradient: 'from-pastel-sky via-pastel-periwinkle to-pastel-mauve',
      buttonBg: 'bg-pastel-sky',
      cardBg: 'bg-midnight/80',
      textColors: {
        title: 'text-pastel-sky',
        price: 'text-pastel-periwinkle',
        features: 'text-pastel-sky',
        icon: 'text-pastel-sky',
        button: 'text-white',
      },
      borderColor: 'border-pastel-sky/30',
    },
    {
      name: 'Premium',
      price: '$599',
      features: [
        '4-hour session',
        '100 edited photos',
        'Digital delivery',
        '2 locations',
        'Printed photo album',
      ],
      bgGradient: 'from-pastel-blush via-pastel-lilac to-pastel-sky',
      buttonBg: 'bg-pastel-lilac',
      cardBg: 'bg-midnight/80',
      textColors: {
        title: 'text-pastel-lilac',
        price: 'text-pastel-blush',
        features: 'text-pastel-sky',
        icon: 'text-pastel-lilac',
        button: 'text-white',
      },
      borderColor: 'border-pastel-lilac/30',
    },
    {
      name: 'Professional',
      price: '$999',
      features: [
        'Full-day session',
        '200 edited photos',
        'Digital delivery',
        'Multiple locations',
        'Printed photo album',
        'Video highlights',
      ],
      bgGradient: 'from-pastel-lilac via-pastel-blush to-pastel-periwinkle',
      buttonBg: 'bg-pastel-blush',
      cardBg: 'bg-midnight/80',
      textColors: {
        title: 'text-pastel-blush',
        price: 'text-pastel-lilac',
        features: 'text-pastel-sky',
        icon: 'text-pastel-blush',
        button: 'text-white',
      },
      borderColor: 'border-pastel-blush/30',
    },
  ]

  return (
    <div className="min-h-screen bg-midnight/90 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-pastel-blush">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-fit"
            >
              <div className="relative">
                {/* Gradient border effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${pkg.bgGradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300`} />
                
                {/* Card content */}
                <div className={`relative ${pkg.cardBg} rounded-xl p-8 h-full ${pkg.borderColor} border shadow-lg`}>
                  <div className="flex flex-col h-full">
                    <h2 className={`text-2xl font-bold mb-4 ${pkg.textColors.title}`}>{pkg.name}</h2>
                    <p className={`text-5xl font-bold mb-6 ${pkg.textColors.price}`}>{pkg.price}</p>
                    <ul className={`space-y-3 mb-8 ${pkg.textColors.features} flex-grow`}>
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <svg
                            className={`w-5 h-5 ${pkg.textColors.icon} mr-2 flex-shrink-0`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/booking"
                      className={`block w-full text-center px-6 py-3 ${pkg.buttonBg} ${pkg.textColors.button} rounded-2xl font-semibold 
                        transition-all duration-300 
                        hover:scale-105 hover:shadow-lg hover:brightness-110
                        active:scale-95
                        transform`}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
