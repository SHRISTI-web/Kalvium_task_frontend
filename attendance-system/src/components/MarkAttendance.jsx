import React, { useState } from 'react';

const MarkAttendance = ({ selectedClass }) => {
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleMarkAttendance = () => {
    setAttendanceMarked(true);
  };

  return (
    <div>
      <h2>Mark Attendance for {selectedClass}</h2>
      {attendanceMarked ? (
        <p>Your attendance has been marked.</p>
      ) : (
        <button onClick={handleMarkAttendance}>Mark Attendance</button>
      )}
    </div>
  );
};

export default MarkAttendance;

