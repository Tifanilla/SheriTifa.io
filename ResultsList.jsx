import React from 'react';

function ResultsList({ matches }) {
  // If no searches have been made yet or no matching students are found
  if (matches.length === 0) {
    return (
      <div style={styles.noMatches}>
        <p>No study partners matched yet.</p>
        <p style={styles.subText}>Select a course and time slot on the left to find peers!</p>
      </div>
    );
  }

  return (
    <div style={styles.listContainer}>
      <p style={styles.matchCount}>Found {matches.length} matching partner(s):</p>
      {matches.map((student, index) => (
        <div key={index} style={styles.studentCard}>
          <div style={styles.avatar}>
            {student.name.charAt(0)}
          </div>
          <div style={styles.info}>
            <h3 style={styles.studentName}>{student.name}</h3>
            <p style={styles.studentDetails}>
              {student.course} • <span style={styles.timeBadge}>{student.timeSlot}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  noMatches: {
    textAlign: 'center',
    padding: '3rem 1rem',
    color: 'var(--color-text-muted)',
    border: '2px dashed var(--color-border)',
    borderRadius: '6px',
    fontSize: '0.95rem',
  },
  subText: {
    fontSize: '0.85rem',
    marginTop: '0.5rem',
    fontStyle: 'italic',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  matchCount: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'var(--color-text-muted)',
    marginBottom: '0.25rem',
  },
  studentCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#FDFDFD',
    border: '1px solid var(--color-border)',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.01)',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-accent)',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  studentName: {
    fontSize: '1.1rem',
    fontWeight: 'normal',
    margin: 0,
  },
  studentDetails: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
  },
  timeBadge: {
    backgroundColor: 'var(--color-border)',
    color: 'var(--color-text-main)',
    padding: '0.15rem 0.4rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
};

export default ResultsList;