import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import Schems from '../../utils/validators/validationSchems';
import { changeIsEdit } from '../../store/slices/eventSlice';
import TimerContainer from '../../components/TimerContainer/TimerContainer';
import styles from './Events.module.sass';
import moment from 'moment';

const Events = (props) => {
  const {
    event: { isEdit, isFetching, timers },
  } = props;

  const [newTimer, setNewTimer] = useState(timers);
  const [duration, setDuration] = useState(0);

  const submitHandler = (values) => {
    const { name, date, time, alarmTime } = values;

    const momentObj = moment(date + time, 'YYYY-MM-DDLT');

    const dateTime = momentObj.format('YYYY-MM-DDTHH:mm:ss');
    console.log(dateTime);

    const durationFull = moment.duration(moment(dateTime).diff(moment()));
    setDuration(durationFull);

    setNewTimer((prevTimers) => [
      ...prevTimers,
      {
        name: name,
        date: date,
        time: time,
        alarmTime: alarmTime,
      },
    ]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Live upcomming checks</h1>
        <p>Remaining time</p>
      </div>

      <TimerContainer
        isFetching={isFetching}
        timers={newTimer}
        duration={duration}
      ></TimerContainer>

      <div className={styles.createBtn} onClick={props.createTimerForm}>
        Create new timer
      </div>
      {isEdit ? (
        <Formik // Formik turn into separate component
          initialValues={{
            name: '',
            date: '',
            time: '',
            alarmTime: '',
          }}
          onSubmit={submitHandler}
        >
          <Form className={styles.form}>
            <label>Name of the event</label>
            <Field name="name" type="text" placeholder="" />
            <label>Date of the event</label>
            <Field name="date" type="date" />
            <label>Time of the event</label>
            <Field name="time" type="time" />
            <label>
              How long beforehand you would like to receive notification?
            </label>
            <Field
              name="alarmTime"
              type="text"
              placeholder="alert time in minutes"
              className={styles.input}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
