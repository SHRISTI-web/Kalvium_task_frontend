// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ClassSelectionPage from './components/ClassSelectionPage';
import AttendancePage from './components/AttendancePage';
import Navigation from './Navigation'; // Import the Navigation component
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
  };

  const handleSelectClass = (selected) => {
    setSelectedClass(selected);
  };

  return (
    <Router>
      <div className="App">
        <Navigation /> {/* Use the Navigation component here */}
        <Switch>
          <Route path="/" exact>
            <LoginPage onLogin={handleLogin} />
          </Route>
          <Route path="/select-class">
            <ClassSelectionPage username={username} onSelectClass={handleSelectClass} />
          </Route>
          <Route path="/mark-attendance">
            <AttendancePage username={username} selectedClass={selectedClass} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
