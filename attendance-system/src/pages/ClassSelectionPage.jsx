import React, { useState } from 'react';
import MarkAttendancePage from './MarkAttendancePage';
import '../App.css';


const ClassSelectionPage = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentsByClass = {
    classA: ['Student A1', 'Student A2', 'Student A3','Student A4','Student A5','Student A6','Student A7','Student A8','Student A9','Student A10','Student A11','Student A12','Student A13','Student A14','Student A15','Student A16','Student A17','Student A18','Student A19','Student A20','Student A21','Student A22','Student A23','Student A24','Student A25','Student A26','Student A27','Student A28','Student A29','Student A30'],
    classB: ['Student B1', 'Student B2', 'Student B3','Student B4','Student B5','Student B6','Student B7','Student B8','Student B9','Student B10','Student B11','Student B12','Student B13','Student B14','Student B15','Student B16','Student B17','Student B18','Student B19','Student B20','Student B21','Student B22','Student B23','Student B24','Student B25','Student B26','Student B27','Student B28','Student B29','Student B30'],
    classC: ['Student C1', 'Student C2', 'Student C3','Student C4','Student C5','Student C6','Student C7','Student C8','Student C9','Student C10','Student C11','Student C12','Student C13','Student C14','Student C15','Student C16','Student C17','Student C18','Student C19','Student C20','Student C21','Student C22','Student C23','Student C24','Student C25','Student C26','Student C27','Student C28','Student C29','Student C30'],
    classD: ['Student D1', 'Student D2', 'Student D3','Student D4','Student D5','Student D6','Student D7','Student D8','Student D9','Student D10','Student D11','Student D12','Student D13','Student D14','Student D15','Student D16','Student D17','Student D18','Student D19','Student D20','Student D21','Student D22','Student D23','Student D24','Student D25','Student D26','Student D27','Student D28','Student D29','Student D30'],
    classE: ['Student E1', 'Student E2', 'Student E3','Student E4','Student E5','Student E6','Student E7','Student E8','Student E9','Student E10','Student E11','Student E12','Student E13','Student E14','Student E15','Student E16','Student E17','Student E18','Student E19','Student E20','Student E21','Student E22','Student E23','Student E24','Student E25','Student E26','Student E27','Student E28','Student E29','Student E30'],
    classF: ['Student F1', 'Student F2', 'Student F3','Student F4','Student F5','Student F6','Student F7','Student F8','Student F9','Student F10','Student F11','Student F12','Student F13','Student F14','Student F15','Student F16','Student F17','Student F18','Student F19','Student F20','Student F21','Student F22','Student F23','Student F24','Student F25','Student F26','Student F27','Student F28','Student F29','Student F30'],
    classG: ['Student G1', 'Student G2', 'Student G3','Student G4','Student G5','Student G6','Student G7','Student G8','Student G9','Student G10','Student G11','Student G12','Student G13','Student G14','Student G15','Student G16','Student G17','Student G18','Student G19','Student G20','Student G21','Student G22','Student G23','Student G24','Student G25','Student G26','Student G27','Student G28','Student G29','Student G30'],
    classH: ['Student H1', 'Student H2', 'Student H3','Student H4','Student H5','Student H6','Student H7','Student H8','Student H9','Student H10','Student H11','Student H12','Student H13','Student H14','Student H15','Student H16','Student H17','Student H18','Student H19','Student H20','Student H21','Student H22','Student H23','Student H24','Student H25','Student H26','Student H27','Student H28','Student H29','Student H30'],
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
          <h2>Select Roll No. to Mark Attendance</h2>
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
