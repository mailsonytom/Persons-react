import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    const timer = setTimeout(() => {
      alert('Saved');
    }, 1000)
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] Cleanup work useEffect');

    };

  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Cleanup work 2nd useEffect');

    };
  })

  const assignedclasses = [];
  if (props.persons.length <= 2) {
    assignedclasses.push('styles.red');
  }
  if (props.persons.length <= 1) {
    assignedclasses.push('styles.bold');
  }

  return (
    <div className={styles.Cockpit}>
      <p className={assignedclasses.join(' ')}>Welcome to React</p>
      <button
        className={styles.button}
        onClick={props.clicked}
      >Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;