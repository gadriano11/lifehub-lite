import React, { useState, useEffect } from 'react';
import './Settings.css';

function Settings({ onClose }) {
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(100);
  const [playSound, setPlaySound] = useState(false);

  // Initialize state from local storage
  useEffect(() => {
    const savedPlaySound = localStorage.getItem('playSound') === 'true';
    setPlaySound(savedPlaySound);
  }, []);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleBrightnessChange = (event) => {
    const newBrightness = event.target.value;
    setBrightness(newBrightness);
    document.body.style.filter = `brightness(${newBrightness}%)`;
  };

  const handlePlaySoundToggle = () => {
    const newPlaySound = !playSound;
    setPlaySound(newPlaySound);
    localStorage.setItem('playSound', newPlaySound);
  };

  return (
    <div className="settings-container">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Settings</h2>

      {/* Volume Control */}
      <div className="settings-item">
        <label htmlFor="volume">Volume:</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{volume}%</span>
      </div>

      {/* Brightness Control */}
      <div className="settings-item">
        <label htmlFor="brightness">Brightness:</label>
        <input
          type="range"
          id="brightness"
          min="50"
          max="150"
          value={brightness}
          onChange={handleBrightnessChange}
        />
        <span>{brightness}%</span>
      </div>

      {/* Play Sound Toggle */}
      <div className="settings-item">
        <label>Play SOS Alert Sound:</label>
        <input
          type="checkbox"
          checked={playSound}
          onChange={handlePlaySoundToggle}
        />
      </div>
    </div>
  );
}

export default Settings;
