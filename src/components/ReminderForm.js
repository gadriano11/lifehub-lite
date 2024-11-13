import React, { useState } from 'react';

function ReminderForm({ addReminder }) {
  const [reminderText, setReminderText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reminderText.trim()) {
      addReminder(reminderText);
      setReminderText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reminder-form">
      <input
        type="text"
        placeholder="Enter a reminder"
        value={reminderText}
        onChange={(e) => setReminderText(e.target.value)}
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
}

export default ReminderForm;
