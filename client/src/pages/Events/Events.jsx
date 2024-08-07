import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import Schems from '../../utils/validators/validationSchems';
import { changeIsEdit, setTimers } from '../../store/slices/eventSlice';
import TimerContainer from '../../components/TimerContainer/TimerContainer';
import styles from './Events.module.sass';
import moment from 'moment';
import FormInput from '../../components/FormInput/FormInput';

const Events = (props) => {
  const {
    event: { isEdit, isFetching, timers },
  } = props;
  // console.log(props);

  const [duration, setDuration] = useState(0);

  const submitHandler = (values) => {
    const { name, date, time, alarmTime } = values;
    console.log(moment());
    console.log(date);
    console.log(time);

    const momentObj = moment(date + time, 'YYYY-MM-DDLT');

    const dateTime = momentObj.format('YYYY-MM-DDTHH:mm:ss');

    // const diff = moment.duration(moment(dateTime).diff(moment()));
    // const {
    //   _data: { days, hours, minutes, seconds },
    //   _milliseconds,
    // } = diff;

    // values.remainingTime = `${days > 0 ? `${days}d` : ''} ${
    //   hours > 0 ? `${hours}h` : ''
    // } ${minutes > 0 ? `${minutes}m` : ''} ${
    //   seconds > 0 ? `${seconds}sec` : ''
    // }`;

    const durationFull = moment.duration(moment(dateTime).diff(moment()));
    setDuration(durationFull);

    props.setTimers(values);
  };

  const formInputClasses = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.warning,
    notValid: styles.notValid,
    valid: styles.valid,
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Live upcomming checks</h1>
        <p>Remaining time</p>
      </div>

      <TimerContainer
        isFetching={isFetching}
        timers={timers}
        duration={duration}
      ></TimerContainer>

      <div className={styles.createBtn} onClick={props.createTimerForm}>
        Create new timer
      </div>
      {isEdit ? (
        <Formik
          initialValues={{
            name: '',
            date: '',
            time: '',
            alarmTime: '',
          }}
          onSubmit={submitHandler}
          validationSchema={Schems.EventsSchem}
        >
          <Form className={styles.form}>
            <label>Name of the event</label>
            <FormInput
              classes={formInputClasses}
              name="name"
              type="text"
              label="Type name of event"
            />
            <label>Date of the event</label>
            <FormInput
              classes={formInputClasses}
              name="date"
              type="date"
              label=""
            />
            <label>Time of the event</label>
            <FormInput
              classes={formInputClasses}
              name="time"
              type="time"
              label=""
            />
            <label>
              How long beforehand you would like to receive notification?
            </label>
            <FormInput
              name="alarmTime"
              type="text"
              placeholder="alert time in minutes"
              classes={formInputClasses}
            />
            <button type="submit">Create</button>
          </Form>
        </Formik>
      ) : (
        <div></div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  createTimerForm: () => dispatch(changeIsEdit()),
  setTimers: (timer) => dispatch(setTimers(timer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
