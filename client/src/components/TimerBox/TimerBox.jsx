import React, { useEffect, useState } from 'react';
import styles from './TimerBox.module.sass';
import moment from 'moment';
import { toast } from 'react-toastify';

const TimerBox = (props) => {
  const { name, date, time, alarmTime, duration } = props.timer;
  const [remainingTime, setRemainingTime] = useState('');
  const [progress, setProgress] = useState(0);

  const show = () => {
    toast.error('Time is up!');
  }; // тостик должен вылетать когда время выйдет и за установленное время до конца таймера

  const getRemainingTime = () => {
    const momentObj = moment(date + time, 'YYYY-MM-DDLT');

    const dateTime = momentObj.format('YYYY-MM-DDTHH:mm:ss');

    const diff = moment.duration(moment(dateTime).diff(moment()));

    const {
      _data: { days, hours, minutes, seconds },
      _milliseconds,
    } = diff;

    setProgress((1 - _milliseconds / duration) * 100);

    return `${days > 0 ? `${days}d` : ''} ${hours > 0 ? `${hours}h` : ''} ${
      minutes > 0 ? `${minutes}m` : ''
    } ${seconds > 0 ? `${seconds}sec` : ''}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 0);

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
