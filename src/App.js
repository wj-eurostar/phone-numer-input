import React, { useState } from 'react';
import PhoneNumberValidator from 'awesome-phonenumber';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';

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
  return (
    <PhoneInput
      defaultCountry={'gb'}
      preferredCountries={['gb', 'fr']}
      value={value}
      onChange={v => onChange(v)}
      inputExtraProps={{
        name: 'phone',
        required: true,
      }}
      isValid={v => {
        const number = new PhoneNumberValidator(`+${v}`);
        console.log({ v, valid: number.isValid() });
        return number.isValid();
      }}
      // Style
      containerStyle={style.container}
      inputStyle={style.input}
      dropdownStyle={style.dropdown}
      buttonStyle={style.button}
      searchStyle={style.search}
    />
  );
};

const AllInputs = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default AllInputs;
