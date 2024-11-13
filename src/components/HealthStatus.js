import React from 'react';

function HealthStatus({ status }) {
  const getStatusColor = () => {
    switch (status) {
      case 'red':
        return '#FF0000';
      case 'amber':
        return '#FFA500';
      case 'green':
        return '#00FF00';
      default:
        return '#CCCCCC';
    }
  };

  return (
    <div className="health-status" style={{ backgroundColor: getStatusColor() }}>
      Health Status
    </div>
  );
}

export default HealthStatus;
