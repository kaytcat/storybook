import React from 'react';

export const Button = ({
  text,
  onClick,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
