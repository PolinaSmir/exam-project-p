import React, { useEffect, useState } from 'react';
import TimerBox from '../TimerBox/TimerBox';
import styles from './TimerContainer.module.sass';
import moment from 'moment';

const TimerContainer = (props) => {
  const { timers } = props;

  const arrForSorting = [...timers];
  const sortedTimers = arrForSorting.sort((a, b) => a.duration - b.duration); // отсортированный массив
  // console.log(sortedTimers);

  return (
    <div className={styles.wrapper}>
      <ul>
        {timers && timers.length > 0 ? (
          timers.map((timer, index) => <TimerBox key={index} timer={timer} />) // Если сюда поставить sortedTimers, то происходит баг с отображением remainingTime
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ul>
    </div>
  );
};

export default TimerContainer;
