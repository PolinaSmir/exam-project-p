import React from 'react';
import styles from './ButtonGroup.module.sass';
import { Field } from 'formik';

const ButtonGroup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.radio}>
        <label>
          {/* <input type="radio" name="buttonGroup" id="yesBut" value="yesBut" /> */}
          <Field type="radio" name="buttonGroup" id="yesBut" value="yesBut" />
          <div className={styles.box}>
            <p>Yes</p>
            <span>But minor variations are allowed</span>
            <div className={styles.recomended}>Recomended</div>
          </div>
        </label>
      </div>
      <div className={styles.radio}>
        <label>
          {/* <input type="radio" name="buttonGroup" id="yes" value="yes" /> */}
          <Field type="radio" name="buttonGroup" id="yes" value="yes" />
          <div className={styles.box}>
            <p>Yes</p>
            <span>The Domain should exactly match the name</span>
          </div>
        </label>
      </div>
      <div className={styles.radio}>
        <label>
          {/* <input type="radio" name="buttonGroup" id="no" value="no" /> */}
          <Field type="radio" name="buttonGroup" id="no" value="no" />
          <div className={styles.box}>
            <p>No</p>
            <span>I am looking for a name, not a Domain</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ButtonGroup;
