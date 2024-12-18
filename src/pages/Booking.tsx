import { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { motion } from 'framer-motion'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { enCA } from 'date-fns/locale'

const locales = {
  'en-CA': enCA,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// Booking validation schema
const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  date: Yup.date().required('Please select a date'),
  sessionType: Yup.string().required('Please select a session type'),
  message: Yup.string(),
})

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showForm, setShowForm] = useState(false)

  // Mock events - replace with actual booking data
  const events = [
    {
      title: 'Wedding Shoot',
      start: new Date(2024, 11, 20),
      end: new Date(2024, 11, 20),
    },
    {
      title: 'Portrait Session',
      start: new Date(2024, 11, 22),
      end: new Date(2024, 11, 22),
    },
  ]

  const sessionTypes = [
    { id: 'wedding', name: 'Wedding Photography', duration: '8 hours' },
    { id: 'portrait', name: 'Portrait Session', duration: '2 hours' },
    { id: 'event', name: 'Event Coverage', duration: '4 hours' },
    { id: 'family', name: 'Family Session', duration: '2 hours' },
  ]

  const handleSelectSlot = ({ start }: { start: Date }) => {
    setSelectedDate(start)
    setShowForm(true)
  }

  return (
    <div className="min-h-screen bg-gradient-main flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
            Book Your Session
          </h1>
          <p className="text-xl text-silver/60 max-w-2xl mx-auto">
            Choose your preferred date and time, and let's create something beautiful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-charcoal/50 backdrop-blur-sm rounded-lg p-6"
          >
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              className="booking-calendar"
              onSelectSlot={handleSelectSlot}
              selectable
              views={['month']}
            />
          </motion.div>

          {/* Booking Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-charcoal/50 backdrop-blur-sm rounded-lg p-6"
            >
              <h2 className="text-2xl font-serif font-semibold mb-6 text-copper">
                Session Details
              </h2>
              
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  date: selectedDate || new Date(),
                  sessionType: '',
                  message: '',
                }}
                validationSchema={BookingSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                  }, 400)
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form className="space-y-6">
                    <div>
                      <label className="block text-silver mb-2">Name</label>
                      <Field
                        name="name"
                        className="w-full px-4 py-2 rounded-md bg-midnight border border-border/40 text-silver focus:border-copper outline-none"
                      />
                      {errors.name && touched.name && (
                        <div className="text-red-500 mt-1">{errors.name}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-silver mb-2">Email</label>
                      <Field
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 rounded-md bg-midnight border border-border/40 text-silver focus:border-copper outline-none"
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500 mt-1">{errors.email}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-silver mb-2">Phone</label>
                      <Field
                        name="phone"
                        className="w-full px-4 py-2 rounded-md bg-midnight border border-border/40 text-silver focus:border-copper outline-none"
                      />
                      {errors.phone && touched.phone && (
                        <div className="text-red-500 mt-1">{errors.phone}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-silver mb-2">Session Type</label>
                      <Field
                        as="select"
                        name="sessionType"
                        className="w-full px-4 py-2 rounded-md bg-midnight border border-border/40 text-silver focus:border-copper outline-none"
                      >
                        <option value="">Select a session type</option>
                        {sessionTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name} ({type.duration})
                          </option>
                        ))}
                      </Field>
                      {errors.sessionType && touched.sessionType && (
                        <div className="text-red-500 mt-1">{errors.sessionType}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-silver mb-2">Message (Optional)</label>
                      <Field
                        as="textarea"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md bg-midnight border border-border/40 text-silver focus:border-copper outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 hover-metallic rounded-md text-midnight font-medium transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Book Session'}
                    </button>
                  </Form>
                )}
              </Formik>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Booking
