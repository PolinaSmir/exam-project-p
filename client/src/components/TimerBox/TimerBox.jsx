import React from 'react';
import styles from './TimerBox.module.sass';

const TimerBox = (props) => {
  const { name, date, time, alarmTime } = props.timer;
  return (
    <li className={styles.box}>
      <p>{name}</p>
      <p>{date}</p>
      <p>{time}</p>
      <button>Delete</button>
    </li>
  );
};

export default TimerBox;
