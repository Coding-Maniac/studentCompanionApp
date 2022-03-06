import React from 'react';
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

const AppSignUpScreen = () => {
  /**
   * This component is used when a user signs up into the application
   * */
  const basicFormInputFields = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Roll Number',
      keyboardType: 'number-pad',
    },
    {
      placeholder: 'Password',
      secureTextEntry: true,
    },
    {
      placeholder: 'Account Type',
      data: accountTypeData,
      isDropdown: true,
    },
  ];

  const studentFormInputFields = [
    {
      placeholder: 'Department',
      data: departmentData,
      isDropdown: true,
    },
    {
      placeholder: 'Semester',
      keyboardType: 'number-pad',
    },
    {
      placeholder: 'Section',
      data: sectionData,
    },
  ];
  return (
    <View style={appStyle.pageFormCenterView}>
      <Card>
        <Card.Divider>
          <Card.Title>Sign Up</Card.Title>
        </Card.Divider>
        <View style={appStyle.containerCenterContent}>
          {basicFormInputFields.map(data =>
            data?.isDropdown ? <AppDropDown {...data} /> : <Input {...data} />,
          )}
          {studentFormInputFields.map(data =>
            data?.isDropdown ? <AppDropDown {...data} /> : <Input {...data} />,
          )}
          <Button
            title="Signup"
            buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
            containerStyle={{
              width: 200,
            }}
            titleStyle={{color: colors.white}}
          />
        </View>
      </Card>
    </View>
  );
};

export default AppSignUpScreen;
