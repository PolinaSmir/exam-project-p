import React from 'react';
import Spinner from '../Spinner/Spinner';
import TimerBox from '../TimerBox/TimerBox';
import styles from './TimerContainer.module.sass';

const TimerContainer = (props) => {
  const { timers } = props;
  console.log(props);
  // if (!props.isFetching && props.children.length === 0) {
  //   return <div>Nothing not found</div>;
  // }

  return (
    <div className={styles.wrapper}>
      <ul>
        {timers && timers.length > 0 ? (
          timers.map((timer, index) => <TimerBox key={index} timer={timer} />)
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ul>
      {/* {props.isFetching && (
        <div>
          <Spinner />
        </div>
      )} */}
    </div>
  );
};

export default TimerContainer;
