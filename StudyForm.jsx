import React, { useState } from 'react';
import Button from './Button';

function StudyForm({ onSearchMatches }) {
  const [course, setCourse] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course || !timeSlot) {
      alert("Please select both a course and a preferred time slot.");
      return;
    }
    onSearchMatches(course, timeSlot);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="course" style={styles.label}>Select Course</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={styles.select}
        >
          <option value="">-- Choose a Course --</option>
          <option value="Computer Architecture">Computer Architecture</option>
          <option value="Calculus">Calculus</option>
          <option value="Data Structures">Data Structures</option>
          <option value="Database Systems">Database Systems</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="timeSlot" style={styles.label}>Select Time Slot</label>
        <select
          id="timeSlot"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          style={styles.select}
        >
          <option value="">-- Choose a Time --</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </div>

      <div style={styles.buttonWrapper}>
        <Button label="Search Matches" type="submit" />
      </div>
    </form>
  );
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  label: { fontFamily: 'inherit', fontWeight: '500', fontSize: '0.9rem', color: 'var(--color-text-main)' },
  select: { padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF', fontFamily: 'inherit', fontSize: '1rem', color: 'var(--color-text-main)', outline: 'none', cursor: 'pointer' },
  buttonWrapper: { marginTop: '0.5rem' }
};

export default StudyForm;