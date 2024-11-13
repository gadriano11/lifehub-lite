import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReminderIcon({ icon, text, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    } else {
      alert(`Clicked on ${text}`);
    }
  };

  return (
    <button className="icon-button" onClick={handleClick}>
      {icon}
      <p>{text}</p>
    </button>
  );
}

export default ReminderIcon;
