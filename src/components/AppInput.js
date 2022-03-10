import React from 'react';
import {Input} from 'react-native-elements';

const AppInput = ({
  formValues,
  setFormValues,
  name,
  placeholder,
  handleChange,
  handleBlur,
  values,
  ...restProps
}) => {
  return (
    <Input
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      value={values.name}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default AppInput;
