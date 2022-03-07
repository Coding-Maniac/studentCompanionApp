import React, {useState} from 'react';
import {View} from 'react-native';
import {appStyle} from '../../theme/appStyle';
import {Button, Card, Input} from 'react-native-elements';
import AppDropDown from '../../components/AppDropDown';
import {
  accountTypeData,
  departmentData,
  sectionData,
} from '../../utils/FormData';
import {colors} from '../../theme/theme';
import AppInput from '../../components/AppInput';
import {handleUserSignUp} from '../../utils/auth';

const AppSignUpScreen = () => {
  /**
   * This component is used when a user signs up into the application
   * */

  const [formValues, setFormValues] = useState({});
  const basicFormInputFields = [
    {
      placeholder: 'Name',
      name: 'name',
    },
    {
      placeholder: 'Roll Number',
      keyboardType: 'number-pad',
      name: 'roll_number',
    },
    {
      placeholder: 'Password',
      secureTextEntry: true,
      name: 'password',
    },
    {
      placeholder: 'Account Type',
      data: accountTypeData,
      isDropdown: true,
      name: 'account_type',
    },
  ];

  const studentFormInputFields = [
    {
      placeholder: 'Department',
      data: departmentData,
      isDropdown: true,
      name: 'department',
    },
    {
      placeholder: 'Semester',
      keyboardType: 'number-pad',
      name: 'semester',
    },
    {
      placeholder: 'Section',
      data: sectionData,
      name: 'section',
    },
  ];

  const handleFormSubmit = () => {
    console.log(formValues);
    handleUserSignUp(formValues);
  };
  return (
    <View style={appStyle.pageFormCenterView}>
      <Card>
        <Card.Divider>
          <Card.Title>Sign Up</Card.Title>
        </Card.Divider>
        <View style={appStyle.containerCenterContent}>
          {basicFormInputFields.map(data =>
            data?.isDropdown ? (
              <AppDropDown
                {...data}
                key={data.name}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            ) : (
              <AppInput
                {...data}
                key={data.name}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            ),
          )}
          {formValues.account_type === accountTypeData[0].value &&
            studentFormInputFields.map(data =>
              data?.isDropdown ? (
                <AppDropDown
                  key={data.name}
                  formValues={formValues}
                  setFormValues={setFormValues}
                  {...data}
                />
              ) : (
                <AppInput
                  {...data}
                  key={data.name}
                  formValues={formValues}
                  setFormValues={setFormValues}
                />
              ),
            )}
          <Button
            title="Signup"
            buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
            containerStyle={{
              width: 200,
            }}
            titleStyle={{color: colors.white}}
            onPress={handleFormSubmit}
          />
        </View>
      </Card>
    </View>
  );
};

export default AppSignUpScreen;
