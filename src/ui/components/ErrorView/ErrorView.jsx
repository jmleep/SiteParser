import React from 'react';
import Error from '@material-ui/icons/ErrorTwoTone';
import styles from './ErrorView.css';

const ErrorView = ({ text }) => (
  <div className={styles.error}>
    <Error color="error" />
    <span className={styles.errorText}>{text}</span>
  </div>
);

export default ErrorView;
