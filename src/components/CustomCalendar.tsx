import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth, isToday, isSameDay } from 'date-fns'

interface Event {
  title: string
  start: Date
  end: Date
}

interface CustomCalendarProps {
  events?: Event[]
  onDateSelect?: (date: Date) => void
  isDateAvailable?: (date: Date) => boolean
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ 
  events = [], 
  onDateSelect,
  isDateAvailable
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Generate calendar days
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const calendarStart = startOfWeek(monthStart)
  const calendarEnd = endOfWeek(monthEnd)

  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  })

  const handleDateClick = (date: Date) => {
    // Only allow date selection if it's available or no availability check is provided
    if (isDateAvailable === undefined || isDateAvailable(date)) {
      setSelectedDate(date)
      onDateSelect?.(date)
    }
  }

  const renderCalendarHeader = () => (
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-br from-pastel-sky/20 to-pastel-periwinkle/20 rounded-t-2xl">
      <motion.button 
        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-copper hover:text-copper/80"
      >
        ←
      </motion.button>
      
      <h2 className="text-2xl font-serif font-semibold text-copper">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      
      <motion.button 
        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-copper hover:text-copper/80"
      >
        →
      </motion.button>
    </div>
  )

  const renderWeekdays = () => (
    <div className="grid grid-cols-7 text-center py-2 bg-pastel-lilac/10 border-b border-pastel-lilac/20">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
        <div key={day} className="text-xs font-serif text-copper/80 uppercase tracking-wider">
          {day}
        </div>
      ))}
    </div>
  )

  const renderCalendarDays = () => (
    <AnimatePresence>
      <div className="grid grid-cols-7 gap-1 p-2">
        {calendarDays.map((day) => {
          const hasEvents = events.some(event => 
            isSameDay(event.start, day) || 
            (day >= event.start && day <= event.end)
          )

          const isSelected = selectedDate && isSameDay(day, selectedDate)
          const isCurrentMonth = isSameMonth(day, currentDate)
          const isDayToday = isToday(day)
          const isDisabled = isDateAvailable && !isDateAvailable(day)

          return (
            <motion.div 
              key={day.toISOString()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`
                relative aspect-square flex items-center justify-center 
                rounded-xl cursor-pointer transition-all duration-300
                ${!isCurrentMonth ? 'text-midnight/20' : 'text-midnight/80'}
                ${isDayToday ? 'bg-copper/10 border border-copper/30' : ''}
                ${isSelected ? 'bg-copper/20 ring-2 ring-copper/50' : ''}
                ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pastel-sky/10'}
              `}
              onClick={() => !isDisabled && handleDateClick(day)}
              whileHover={!isDisabled ? { scale: 1.05 } : undefined}
              whileTap={!isDisabled ? { scale: 0.95 } : undefined}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium">{format(day, 'd')}</span>
                {hasEvents && (
                  <span className="absolute bottom-1 w-1.5 h-1.5 bg-copper rounded-full"></span>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </AnimatePresence>
  )

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-pastel-mauve/10 via-pastel-periwinkle/10 to-pastel-lilac/10 
                  rounded-2xl border border-pastel-lilac/20 shadow-floating overflow-hidden"
    >
      {renderCalendarHeader()}
      {renderWeekdays()}
      {renderCalendarDays()}
    </motion.div>
  )
}

export default CustomCalendar
