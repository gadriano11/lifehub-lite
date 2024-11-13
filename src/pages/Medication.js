import React from 'react';
import { useNavigate } from 'react-router-dom';
import MedicationList from '../components/MedicationList';
import './Medication.css';

function Medication() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="medication-container">
      <button className="back-button" onClick={handleBackClick}>
        ← Back
      </button>
      <h2>Medications</h2>
      <MedicationList />
    </div>
  );
}

export default Medication;
