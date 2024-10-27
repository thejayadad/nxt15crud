import React from 'react'
import Calendar from './_components/calendar';

const CalendarPage = () => {
    const events = [
        { date: '2024-10-01', name: 'Event 1', minutes: 30 },
        { date: '2024-10-05', name: 'Event 2', minutes: 45 },
        { date: '2024-10-10', name: 'Event 3', minutes: 60 },
        { date: '2024-10-11', name: 'Event 4', minutes: 60 },
        { date: '2024-10-12', name: 'Event 5', minutes: 60 },
        { date: '2024-10-28', name: 'Event 6', minutes: 60 },
    
    
      ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-4 text-slate-200">Event Tracker</h1>
       <Calendar />
    </div>
  )
}

export default CalendarPage