import React, { useState } from 'react';

const ClassSelection = ({ onSelectClass }) => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleSelectClass = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelectClass(selectedClass);
  };

  return (
    <div>
      <h2>Select Your Class</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedClass} onChange={handleSelectClass}>
          <option value="classA">Class A</option>
          <option value="classB">Class B</option>
          <option value="classC">Class C</option>
        </select>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ClassSelection;

