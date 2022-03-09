import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {appStyle} from '../../theme/appStyle';
import {Button, Card, Input, Text} from 'react-native-elements';
import AppDropDown from '../../components/AppDropDown';
import {
  accountTypeData,
  departmentData,
  sectionData,
  STUDENT,
} from '../../utils/FormData';
import {colors} from '../../theme/theme';
import AppInput from '../../components/AppInput';
import {handleUserSignUp} from '../../utils/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppSignUpScreen = () => {
  /**
   * This component is used when a user signs up into the application
   * */

  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState(false);
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
      name: 'type',
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

  const handleFormSubmit = async () => {
    const data = await handleUserSignUp(formValues);
    if (data?.errors || data?.error) {
      setError(data.message || data.errors?.message);
    } else {
      setError({});
      try {
        await AsyncStorage.setItem('roll_number', data.roll_number);
        await AsyncStorage.setItem('password', data.password);
      } catch (e) {
        setError('Failed to store local variables');
      }
    }
  };
  return (
    <View style={appStyle.pageFormCenterView}>
      <Card>
        <Card.Divider>
          <Card.Title>Sign Up</Card.Title>
        </Card.Divider>
        <ScrollView>
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
            {formValues.type === STUDENT &&
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
            <Text style={appStyle.errorText}>{error}</Text>
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
        </ScrollView>
      </Card>
    </View>
  );
};

export default AppSignUpScreen;
