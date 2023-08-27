import React, { useState } from 'react';
import '../App.css';

const MarkAttendancePage = ({ selectedClass, selectedStudent }) => {
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleMarkAttendance = () => {
    // Implement attendance marking logic here
    setAttendanceMarked(true);
  };

  return (
    <div>
      <h1>Attendance System</h1>
      <h2>Mark Attendance for {selectedStudent} in {selectedClass}</h2>
      {attendanceMarked ? (
        <p>Attendance for {selectedStudent} in {selectedClass} has been marked.</p>
      ) : (
        <button onClick={handleMarkAttendance}>Mark Attendance</button>
      )}
    </div>
  );
};

export default MarkAttendancePage;
