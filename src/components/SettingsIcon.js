import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import Settings from '../pages/Settings';

function SettingsIcon() {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  return (
    <div>
      <div className="settings-icon" onClick={handleSettingsClick}>
        <FaCog />
      </div>
      {showSettings && <Settings onClose={handleCloseSettings} />}
    </div>
  );
}

export default SettingsIcon;
