import React from 'react';
import {Input} from 'react-native-elements';

const AppInput = ({
  formValues,
  setFormValues,
  data,
  handleChange,
  handleBlur,
  values,
  ...restProps
}) => {
  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <Input
      onChangeText={handleChange(data.name)}
      onBlur={handleBlur(data.name)}
      value={values.name}
      placeholder={data.placeholder}
      {...restProps}
    />
  );
};

export default AppInput;
