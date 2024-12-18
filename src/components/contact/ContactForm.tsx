import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  budget: '',
  message: ''
};

const eventTypes = [
  'Wedding Photography',
  'Portrait Session',
  'Event Coverage',
  'Nature/Landscape',
  'Other'
];

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData(initialFormData);
      }, 2000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-lg"
          onClick={e => e.stopPropagation()}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-75" />
          <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-xl">
            {/* Content Container */}
            <div className="relative">
              {/* Form Header */}
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-cormorant text-white">Let's Create Something Beautiful</h2>
                <p className="text-gray-400 mt-1">
                  Hi there! I'm so glad you're interested in working together. Please fill out the form below and I'll get back to you personally as soon as possible. I'm really looking forward to hearing about your project and seeing how I can help.
                </p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-gray-800 border ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-gray-800 border ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Event Type Field */}
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-300">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-gray-800 border ${
                      errors.eventType ? 'border-red-500' : 'border-gray-600'
                    } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && <p className="mt-1 text-sm text-red-500">{errors.eventType}</p>}
                </div>

                {/* Budget Field */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md bg-gray-800 border ${
                      errors.budget ? 'border-red-500' : 'border-gray-600'
                    } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                  </select>
                  {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`mt-1 block w-full rounded-md bg-gray-800 border ${
                      errors.message ? 'border-red-500' : 'border-gray-600'
                    } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Tell me about your vision..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 rounded-md text-sm font-medium text-white 
                      ${isSubmitting 
                        ? 'bg-blue-600 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600'
                      } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>

              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`p-4 ${
                      submitStatus === 'success' ? 'bg-green-500/10' : 'bg-red-500/10'
                    }`}
                  >
                    <p className={`text-sm ${
                      submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {submitStatus === 'success' 
                        ? "Message sent successfully! I'll get back to you soon."
                        : 'Something went wrong. Please try again.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
