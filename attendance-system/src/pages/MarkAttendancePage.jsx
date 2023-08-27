import React, { useState } from 'react';

const MarkAttendancePage = ({ selectedClass }) => {
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleMarkAttendance = () => {
    // Implement attendance marking logic here
    setAttendanceMarked(true);
  };

  return (
    <div>
      <h1>Attendance System</h1>
      <h2>Mark Attendance for {selectedClass}</h2>
      {attendanceMarked ? (
        <p>Your attendance has been marked.</p>
      ) : (
        <button onClick={handleMarkAttendance}>Mark Attendance</button>
      )}
    </div>
  );
};

export default MarkAttendancePage;
