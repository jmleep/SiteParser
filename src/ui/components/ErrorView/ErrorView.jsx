import React from 'react';
import PropTypes from 'prop-types';
import Error from '@material-ui/icons/ErrorTwoTone';
import styles from './ErrorView.css';

/**
 * This component returns a custom error view which
 * is populated with the provided text
 */
const ErrorView = ({ text }) => (
  <div className={styles.error}>
    <Error color="error" />
    <span className={styles.errorText}>{text}</span>
  </div>
);

ErrorView.propTypes = {
  text: PropTypes.string
};

ErrorView.defaultProps = {
  text: 'An error occured...'
};

export default ErrorView;
