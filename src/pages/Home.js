import React from 'react';
import SOSButton from '../components/SOSButton';
import ReminderIcon from '../components/ReminderIcon';
import HealthStatus from '../components/HealthStatus';
import SettingsIcon from '../components/SettingsIcon';
import { FaBell, FaPills, FaRegSmile } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleCheckInClick = () => {
    navigate('/check-in');
  };

  return (
    <div className="home-container">
      <SettingsIcon />
      <div className="status-container">
        <HealthStatus status="green" />
      </div>
      <div className="sos-container">
        <SOSButton />
      </div>
      <div className="check-in-container">
        <button className="check-in-button" onClick={handleCheckInClick}>
          <FaRegSmile />
          <p>Check-In</p>
        </button>
      </div>
      <div className="reminders-container">
        <ReminderIcon icon={<FaBell />} text="Daily Reminder" link="/daily-reminder" />
        <ReminderIcon icon={<FaPills />} text="Medication" link="/medication" />
      </div>
    </div>
  );
}

export default Home;
