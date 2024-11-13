import React from 'react';

function MedicationList() {
  // Placeholder data for medications
  const medications = [
    { name: 'Aspirin', dosage: '100 mg', time: 'Morning' },
    { name: 'Metformin', dosage: '500 mg', time: 'Before Dinner' },
    { name: 'Atorvastatin', dosage: '20 mg', time: 'Evening' },
  ];

  return (
    <ul className="medication-list">
      {medications.map((medication, index) => (
        <li key={index} className="medication-item">
          <strong>{medication.name}</strong> - {medication.dosage} ({medication.time})
        </li>
      ))}
    </ul>
  );
}

export default MedicationList;
