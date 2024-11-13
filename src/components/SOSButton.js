import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

function SOSButton() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSOSClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    alert('SOS Alert Triggered!\nContacting emergency services or nearest kin.');
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <button className="sos-button" onClick={handleSOSClick}>
        SOS
      </button>
      {showConfirmation && (
        <ConfirmationDialog onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default SOSButton;
