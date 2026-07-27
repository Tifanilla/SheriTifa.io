import React from 'react';

const styles = {
  button: {
    padding: '0.75rem 1.5rem',
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    outline: 'none',
  },
};

function Button({ label, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
}

export default Button;