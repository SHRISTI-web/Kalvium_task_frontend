import React, { useState } from 'react';

const AttendancePage = ({ username, selectedClass }) => {
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleAttendanceMarking = () => {
    // Perform attendance marking logic
    // Set attendanceMarked to true
    setAttendanceMarked(true);
  };

  return (
    <div className="attendance-page">
      <h2>Hello, {username}!</h2>
      <p>Class: {selectedClass}</p>
      {attendanceMarked ? (
        <p>Your attendance has been marked. Thank you!</p>
      ) : (
        <button onClick={handleAttendanceMarking}>Mark Attendance</button>
      )}
    </div>
  );
};

export default AttendancePage;
