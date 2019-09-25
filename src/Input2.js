import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const style = {
  container: {},
  input: {
    height: 58,
    fontFamily: 'Pembroke, sans-serif',
    fontSize: 16,
    border: '1px solid blue',
  },
  dropdown: {},
  button: {
    border: '1px solid blue',
  },
  search: {},
};

const Input = () => {
  const [value, onChange] = useState('');
  return <PhoneInput value={value} onChange={v => onChange(v)} />;
};

export default Input;
