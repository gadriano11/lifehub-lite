import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckInForm.css';

function CheckInForm() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (inputText.trim()) {
      alert(`You entered: ${inputText}`);
      setInputText('');
    } else {
      alert('Please enter how you are feeling.');
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="check-in-container">
      <h2>Check-In</h2>
      <textarea
        placeholder="How are you feeling today?"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="check-in-input"
      />
      <div className="button-group">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="back-button" onClick={handleBackClick}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default CheckInForm;
