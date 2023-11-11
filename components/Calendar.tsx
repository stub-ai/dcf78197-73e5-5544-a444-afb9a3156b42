import { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">Select a Date:</h2>
      <input type="date" onChange={handleDateChange} className="border p-2 rounded w-full" />
      <p className="mt-4">Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default Calendar;