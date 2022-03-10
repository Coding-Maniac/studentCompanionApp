const getFormikInitialValues = data => {
  const initialValues = {};
  for (let i = 0; i < data.length; i++) {
    initialValues[data[i].name] = '';
  }

  return initialValues;
};

export default getFormikInitialValues;
