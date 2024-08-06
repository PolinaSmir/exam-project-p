import React, { useEffect, useState } from 'react';
import TimerBox from '../TimerBox/TimerBox';
import styles from './TimerContainer.module.sass';
import moment from 'moment';

const TimerContainer = (props) => {
  const { timers, duration } = props;

  // const getTimersWithDiff = () => {
  //   timers.map((o) => {
  //     const { date, time } = o;

  //     const momentObj = moment(date + time, 'YYYY-MM-DDLT');
  //     const dateTime = momentObj.format('YYYY-MM-DDTHH:mm:ss');

  //     o.diff = moment(dateTime).diff(moment());
  //   });

  //   timers.sort(function (a, b) {
  //     console.log(a, b);
  //     if (a.diff > b.diff) {
  //       return 1;
  //     }
  //     if (a.diff < b.diff) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   console.log(timers);
  //   return timers.map((timer, index) => (
  //     <TimerBox key={index} timer={timer} duration={duration} />
  //   ));
  // };
  // getTimersWithDiff();
  // console.log(getMappedArray());
  // useEffect(() => {});

  return (
    <div className={styles.wrapper}>
      <ul>
        {/* {timers && timers.length > 0 ? (
          timers.map((timer, index) => (
            <TimerBox key={index} timer={timer} duration={duration} />
          ))
        ) : timers && timers.length > 1 ? (
          getTimersWithDiff()
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )} */}
        {timers && timers.length > 0 ? (
          timers
            .map((timer, index) => (
              <TimerBox key={index} timer={timer} duration={duration} />
            ))
            .sort((a, b) => console.log(a.props, b.props))
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ul>
    </div>
  );
};

export default TimerContainer;
