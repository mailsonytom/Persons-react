import React, { useEffect, memo } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      alert('Saved');
    }, 1000)
    return () => {
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
  if (props.personsLength <= 2) {
    assignedclasses.push('styles.red');
  }
  if (props.personsLength <= 1) {
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

export default memo(Cockpit);