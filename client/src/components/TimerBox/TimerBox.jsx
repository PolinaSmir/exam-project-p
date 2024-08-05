import React, { useEffect, useState } from 'react';
import styles from './TimerBox.module.sass';
import moment from 'moment';

const TimerBox = (props) => {
  const { duration } = props;
  const { name, date, time, alarmTime } = props.timer;
  const [remainingTime, setRemainingTime] = useState('');
  const [progress, setProgress] = useState(1);

  const getRemainingTime = () => {
    const momentObj = moment(date + time, 'YYYY-MM-DDLT');

    const dateTime = momentObj.format('YYYY-MM-DDTHH:mm:ss');

    const diff = moment.duration(moment(dateTime).diff(moment()));

    const {
      _data: { days, hours, minutes, seconds },
      _milliseconds,
    } = diff;

    // setProgress(Math.round(1-_milliseconds/duration)*100);
    setProgress((1 - _milliseconds / duration) * 100);

    return `${days > 0 ? `${days}d` : ''} ${hours > 0 ? `${hours}h` : ''} ${
      minutes > 0 ? `${minutes}m` : ''
    } ${seconds > 0 ? `${seconds}sec` : ''}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <li className={styles.box}>
      <p>{name}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{alarmTime}</p>
      <p>{remainingTime === '   ' ? '' : remainingTime}</p>
      <div
        className={styles.progress}
        style={{ width: `${progress >= 100 ? 100 : progress}%` }}
      ></div>
    </li>
  );
};

export default TimerBox;
