// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({ value, onClick }) {
  let buttonClassName = classes.calcBtns;

  if (value === '0' || value === '0') {
    buttonClassName += ` ${classes.res}`;
  } else if (value === 'X' || value === '-' || value === '=' || value === '+') {
    buttonClassName += ` ${classes.side}`;
  }

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>{value}</button>
  );
}

Button.propTypes = { value: PropTypes.string.isRequired };
Button.defaultValue = { value: 0 };

Button.propTypes = { onClick: PropTypes.func.isRequired };

export default Button;
