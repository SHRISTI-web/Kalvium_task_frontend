import React, { useState } from 'react';

const ClassSelectionPage = ({ username, onSelectClass }) => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleClassSelection = () => {
    // Perform class selection logic and update selectedClass state
    onSelectClass(selectedClass);
  };

  return (
    <div className="class-selection-page">
      <h2>Welcome, {username}!</h2>
      <p>Please select your class:</p>
      <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
        <option value="classA">Class A</option>
        <option value="classB">Class B</option>
        <option value="classC">Class C</option>
      </select>
      <button onClick={handleClassSelection}>Continue</button>
    </div>
  );
};

export default ClassSelectionPage;
