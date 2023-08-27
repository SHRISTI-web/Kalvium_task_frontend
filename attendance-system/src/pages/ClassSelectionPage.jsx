import React, { useState } from 'react';
import MarkAttendancePage from './MarkAttendancePage';
import '../App.css';


const ClassSelectionPage = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentsByClass = {
    classA: ['Student A1', 'Student A2', 'Student A3','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4','Student A4'],
    classB: ['Student B1', 'Student B2', 'Student B3'],
    classC: ['Student C1', 'Student C2', 'Student C3'],
    classD: ['Student C1', 'Student C2', 'Student C3'],
    classE: ['Student C1', 'Student C2', 'Student C3'],
    classF: ['Student C1', 'Student C2', 'Student C3'],
    classG: ['Student C1', 'Student C2', 'Student C3'],
    classH: ['Student C1', 'Student C2', 'Student C3'],
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
          <button onClick={() => handleSelectClass('classD')}>Class D</button>
          <button onClick={() => handleSelectClass('classE')}>Class E</button>
          <button onClick={() => handleSelectClass('classF')}>Class F</button>
          <button onClick={() => handleSelectClass('classG')}>Class G</button>
          <button onClick={() => handleSelectClass('classH')}>Class H</button>
        </div>
      )}
    </div>
  );
};

export default ClassSelectionPage;
