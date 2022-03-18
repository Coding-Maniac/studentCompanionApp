import React from 'react';
import {Button, Card} from 'react-native-elements';
import {Formik} from 'formik';
import {appStyle} from '../theme/appStyle';
import getFormikInitialValues from '../utils/getFormikInitialValues';
import {Text, View} from 'react-native';
import AppHandleInput from './AppHandleInput';
import {colors} from '../theme/theme';

const AppHandleForm = ({
  formInputFields,
  ctaText,
  handleFormSubmit,
  children,
  commonError,
}) => {
  const formikInitialValues = getFormikInitialValues(formInputFields);

  return (
    <Card>
      <Card.Divider>
        <Card.Title>{ctaText}</Card.Title>
      </Card.Divider>
      <View style={appStyle.containerCenterContent}>
        <Text style={appStyle.errorText}>{commonError}</Text>
        <Formik
          initialValues={formikInitialValues}
          onSubmit={values => handleFormSubmit(values)}>
          {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
            <>
              {formInputFields.map(data => (
                <AppHandleInput
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  data={data}
                />
              ))}
              <Button
                title={ctaText}
                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
                containerStyle={{
                  width: 200,
                }}
                titleStyle={{color: colors.white}}
                onPress={handleSubmit}
                loading={false}
              />
            </>
          )}
        </Formik>
      </View>
      {children}
    </Card>
  );
};

export default AppHandleForm;
