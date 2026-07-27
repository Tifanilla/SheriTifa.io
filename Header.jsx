import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>StudySync</h1>
      <p style={styles.subtitle}>Find your ideal study partners, seamlessly.</p>
    </header>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    padding: '2.5rem 1rem',
    borderBottom: '1px solid var(--color-border)',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'var(--color-text-muted)',
    fontSize: '1rem',
    fontStyle: 'italic',
  },
};

export default Header;