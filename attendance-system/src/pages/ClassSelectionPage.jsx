import React, { useState } from 'react';
import MarkAttendancePage from './MarkAttendancePage';
import '../App.css';


const ClassSelectionPage = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentsByClass = {
    classA: ['Student A1', 'Student A2', 'Student A3'],
    classB: ['Student B1', 'Student B2', 'Student B3'],
    classC: ['Student C1', 'Student C2', 'Student C3'],
  };

  const handleSelectClass = (classId) => {
    setSelectedClass(classId);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <h1>Attendance System</h1>
      {selectedClass ? (
        <div>
          <h2>Select Student to Mark Attendance</h2>
          <div>
            {studentsByClass[selectedClass].map((student) => (
              <button key={student} onClick={() => handleSelectStudent(student)}>
                {student}
              </button>
            ))}
          </div>
          {selectedStudent && (
            <MarkAttendancePage selectedClass={selectedClass} selectedStudent={selectedStudent} />
          )}
        </div>
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
