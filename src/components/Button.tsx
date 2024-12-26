import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'soft'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  to?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  onClick
}) => {
  const baseStyles = 'relative overflow-hidden rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2'
  
  const variantStyles = {
    primary: 'bg-copper text-white hover:bg-copper/90 focus:ring-copper/50',
    secondary: 'bg-pastel-lilac text-white hover:bg-pastel-lilac/90 focus:ring-pastel-lilac/50',
    outline: 'border-2 border-pastel-periwinkle text-pastel-periwinkle hover:bg-pastel-periwinkle/10 focus:ring-pastel-periwinkle/50',
    soft: 'bg-pastel-blush/30 text-midnight hover:bg-pastel-blush/50 focus:ring-pastel-blush/50'
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg'
  }

  const combinedClassName = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `

  // Decorative gradient overlay
  const gradientOverlay = (
    <span 
      className="absolute inset-0 bg-gradient-to-r from-pastel-mauve/20 via-pastel-sky/20 to-pastel-periwinkle/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      aria-hidden="true"
    />
  )

  // Hover effect sparkle
  const sparkleEffect = (
    <span 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 50%)`,
        opacity: 0,
        transform: 'scale(0)',
        transition: 'all 0.3s ease-out'
      }}
    />
  )

  const buttonContent = (
    <div className="relative z-10 flex items-center justify-center space-x-2">
      {children}
      <span className="transition-transform group-hover:translate-x-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </span>
    </div>
  )

  // If 'to' prop is provided, render as a Link
  if (to) {
    return (
      <Link 
        to={to} 
        className={`group ${combinedClassName}`}
        onClick={onClick}
      >
        {gradientOverlay}
        {sparkleEffect}
        {buttonContent}
      </Link>
    )
  }

  // Otherwise, render as a button
  return (
    <button 
      className={`group ${combinedClassName}`}
      onClick={onClick}
    >
      {gradientOverlay}
      {sparkleEffect}
      {buttonContent}
    </button>
  )
}

export default Button
