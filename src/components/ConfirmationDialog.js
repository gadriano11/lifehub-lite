import React from 'react';
import './ConfirmationDialog.css';

function ConfirmationDialog({ onConfirm, onCancel }) {
  return (
    <div className="confirmation-dialog">
      <div className="dialog-content">
        <h3>Are you sure?</h3>
        <p>Do you want to trigger the SOS alert?</p>
        <button className="confirm-button" onClick={onConfirm}>Yes</button>
        <button className="cancel-button" onClick={onCancel}>No</button>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
