import React from 'react';
import {Input} from 'react-native-elements';

const AppInput = ({formValues, setFormValues, name, ...restProps}) => {
  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <Input
      {...restProps}
      value={formValues[name]}
      onChangeText={value => handleInputChange(name, value)}
    />
  );
};

export default AppInput;
