'use client'
// components/Calendar.js
import React, { useState } from 'react';

const Calendar = ({ events }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="month" className="mr-2">Month:</label>
          <select id="month" value={selectedMonth} onChange={handleMonthChange} className="border rounded-md px-3 py-2">
            {Array.from({ length: 12 }, (_, index) => (
              <option className='p-2' key={index} value={index}>{new Date(0, index).toLocaleString('default', { month: 'long' })}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year" className="mr-2">Year:</label>
          <select id="year" value={selectedYear} onChange={handleYearChange} className="border rounded-md px-3 py-2">
            {Array.from({ length: 10 }, (_, index) => (
              <option className='p-2' key={index} value={2024 + index}>{2024 + index}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 p-4 mx-auto max-w-screen-lg">
        {days.map((day) => {
          // Create a date object for the current day
          const currentDate = new Date(selectedYear, selectedMonth, day - 1);
          
          const event = events.find(event => {
            // Create a date object from the event date string
            const eventDate = new Date(event.date);

            // Normalize both dates to remove time components
            return (
              currentDate.getDate() === eventDate.getDate() &&
              currentDate.getMonth() === eventDate.getMonth() &&
              currentDate.getFullYear() === eventDate.getFullYear()
            );
          });

          const color = event ? 'bg-green-500' : 'bg-gray-200'; // Change color based on event presence

          return (
            <div key={day} className={`h-20 flex items-center justify-center border rounded-md ${color}`}>
              <span className="font-bold">{day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
