'use client'
import React, {useState} from 'react'

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

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
    </div>
   )
}

export default Calendar