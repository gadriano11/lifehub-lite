import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReminderForm from '../components/ReminderForm';
import './DailyReminder.css';

function DailyReminder() {
  const [reminders, setReminders] = useState([]);
  const navigate = useNavigate();

  const addReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="reminder-container">
      <button className="back-button" onClick={handleBackClick}>
        ← Back
      </button>
      <h2>Daily Reminders</h2>
      <ReminderForm addReminder={addReminder} />
      <ul className="reminder-list">
        {reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <li key={index} className="reminder-item">
              {reminder}
              <button onClick={() => deleteReminder(index)} className="delete-button">
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No reminders set.</p>
        )}
      </ul>
    </div>
  );
}

export default DailyReminder;
