import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DailyReminder from './pages/DailyReminder';
import Medication from './pages/Medication';
import CheckIn from './pages/CheckIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-reminder" element={<DailyReminder />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/check-in" element={<CheckIn />} />
      </Routes>
    </Router>
  );
}

export default App;
