import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Card, Image, Input, Text} from 'react-native-elements';
import {colors} from '../../theme/theme';
import {appStyle} from '../../theme/appStyle';
import AppInput from '../../components/AppInput';
import {
  handleErpToken,
  handleUserLogin,
  storeCredentials,
} from '../../utils/auth';
import {APP_SIGNUP_SCREEN} from '../../navigation/Routes';
import AppHandleInput from '../../components/AppHandleInput';
import {AppLogo} from '../../assets';

const AppLoginScreen = ({navigation}) => {
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

  const handleNavigateToSignUp = () => {
    navigation.navigate(APP_SIGNUP_SCREEN);
  };
  return (
    <View style={appStyle.pageFormCenterView}>
      <View style={appStyle.containerCenterContent}>
        <Image
          source={AppLogo}
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
          }}
        />
      </View>

      <Card>
        <Card.Divider>
          <Card.Title>Login</Card.Title>
        </Card.Divider>
        <View style={appStyle.containerCenterContent}>
          {formInputFields.map(data => (
            <AppHandleInput
              key={data.name}
              data={data}
              setFormValues={setFormValues}
              formValues={formValues}
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
        <View
          style={{
            flexDirection: 'row',
            margin: 0,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text>Dont have an account yet ?</Text>
          <Button
            containerStyle={{
              width: 100,
            }}
            title="Sign Up"
            type="clear"
            onPress={handleNavigateToSignUp}
            titleStyle={{color: colors.black}}
          />
        </View>
      </Card>
    </View>
  );
};

export default AppLoginScreen;
