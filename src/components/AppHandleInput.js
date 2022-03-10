import React from 'react';
import AppDropDown from './AppDropDown';
import AppInput from './AppInput';

const AppHandleInput = ({
  data,
  formValues,
  setFormValues,
  handleChange,
  handleBlur,
  values,
}) => {
  return data?.isDropdown ? (
    <AppDropDown
      {...data}
      formValues={formValues}
      setFormValues={setFormValues}
    />
  ) : (
    <AppInput {...data} formValues={formValues} setFormValues={setFormValues} />
  );
};

export default AppHandleInput;
