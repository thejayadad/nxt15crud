'use client'
import React, { useState } from 'react';

const Calendar = ({ events }) => {
  // State to hold the selected month and year
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Function to handle month change
  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  // Function to handle year change
  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  // Get the number of days in the selected month
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

  // Create an array to represent each day in the selected month
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="month" className="mr-2">Month:</label>
          <select id="month" value={selectedMonth} onChange={handleMonthChange} className="border rounded-md">
            {Array.from({ length: 12 }, (_, index) => (
              <option key={index} value={index}>{new Date(0, index).toLocaleString('default', { month: 'long' })}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year" className="mr-2">Year:</label>
          <select id="year" value={selectedYear} onChange={handleYearChange} className="border rounded-md">
            {/* You can adjust the year range as needed */}
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={2024 + index}>{2024 + index}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 p-4 mx-auto max-w-screen-lg">
        {days.map((day) => {
          // Check if there's an event for the current day
          const event = events.find(event => new Date(event.date).getDate() === day 
            && new Date(event.date).getMonth() === selectedMonth 
            && new Date(event.date).getFullYear() === selectedYear);
          const color = event ? 'bg-green-500' : 'bg-gray-200'; // Change color based on event presence

          return (
            <div key={day} className={`h-8 flex items-center justify-center border rounded-md ${color}`}>
              <span className="font-bold">{day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
