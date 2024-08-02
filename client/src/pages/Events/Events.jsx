import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import FormInput from '../../components/FormInput/FormInput';
import CONSTANTS from '../../constants';
import Schems from '../../utils/validators/validationSchems';
import { changeIsEdit } from '../../store/slices/eventSlice';
import TimerContainer from '../../components/TimerContainer/TimerContainer';
import styles from './Events.module.sass';

const Events = (props) => {
  const {
    event: { isEdit, isFetching, timers },
  } = props;
  console.log(props);

  const [newTimer, setNewTimer] = useState(timers);
  console.log(newTimer);

  const submitHandler = (values) => {
    console.log(values);
    setNewTimer((prevTimers) => [
      ...prevTimers,
      {
        name: values.name,
        date: values.date,
        time: values.time,
        alarmTime: values.alarmTime,
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
