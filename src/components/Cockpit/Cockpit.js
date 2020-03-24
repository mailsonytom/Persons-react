import React from 'react';
import styles from './Cockpit.module.css';


const cockpit = (props) => {
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

export default cockpit;