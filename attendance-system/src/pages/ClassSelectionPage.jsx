import React, { useState } from 'react';
import MarkAttendancePage from './MarkAttendancePage';

const ClassSelectionPage = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSelectClass = (classId) => {
    setSelectedClass(classId);
  };

  return (
    <div>
      <h1>Attendance System</h1>
      {selectedClass ? (
        <MarkAttendancePage selectedClass={selectedClass} />
      ) : (
        <div>
          <h2>Select Your Class</h2>
          <button onClick={() => handleSelectClass('classA')}>Class A</button>
          <button onClick={() => handleSelectClass('classB')}>Class B</button>
          <button onClick={() => handleSelectClass('classC')}>Class C</button>
        </div>
      )}
    </div>
  );
};

export default ClassSelectionPage;
