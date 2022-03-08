import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Card, Input, Text} from 'react-native-elements';
import {colors} from '../../theme/theme';
import {appStyle} from '../../theme/appStyle';
import AppInput from '../../components/AppInput';
import {
  handleErpToken,
  handleUserLogin,
  storeCredentials,
} from '../../utils/auth';

const AppLoginScreen = () => {
  /**
   * This component is used when a user logins into the application
   * */
  const [formValues, setFormValues] = useState({
    roll_number: '',
    password: '',
  });
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState(false);

  const formInputFields = [
    {
      keyboardType: 'number-pad',
      placeholder: 'Roll Number',
      name: 'roll_number',
    },
    {
      placeholder: 'Password',
      secureTextEntry: true,
      name: 'password',
    },
  ];

  const handleSubmitForm = async () => {
    setFormLoading(true);
    const userData = await handleUserLogin(formValues);
    if (userData?.error) {
      setError(userData.error);
    } else {
      await storeCredentials(userData.roll_number, userData.password);
    }
    setFormLoading(false);
  };

  return (
    <View style={appStyle.pageFormCenterView}>
      <Card>
        <Card.Divider>
          <Card.Title>Login</Card.Title>
        </Card.Divider>
        <View style={appStyle.containerCenterContent}>
          {formInputFields.map(data => (
            <AppInput
              key={data.name}
              {...data}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          ))}
          <Text style={appStyle.errorText}>{error}</Text>
          <Button
            title="Login"
            buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
            containerStyle={{
              width: 200,
            }}
            titleStyle={{color: colors.white}}
            onPress={handleSubmitForm}
            loading={formLoading}
          />
        </View>
      </Card>
    </View>
  );
};

export default AppLoginScreen;
