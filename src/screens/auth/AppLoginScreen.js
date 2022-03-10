import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import {colors} from '../../theme/theme';
import {appStyle} from '../../theme/appStyle';
import {handleUserLogin, storeCredentials} from '../../utils/auth';
import {APP_SIGNUP_SCREEN} from '../../navigation/Routes';
import {AppLogo} from '../../assets';
import AppHandleForm from '../../components/AppHandleForm';

const AppLoginScreen = ({navigation}) => {
  /**
   * This component is used when a user logins into the application
   * */
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

  const handleFormSubmit = async values => {
    const userData = await handleUserLogin(values);
    if (userData?.error) {
      setError(userData.error);
    } else {
      await storeCredentials(userData.roll_number, userData.password);
    }
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
      <AppHandleForm
        formInputFields={formInputFields}
        handleFormSubmit={handleFormSubmit}
        ctaText="Login">
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
      </AppHandleForm>
    </View>
  );
};

export default AppLoginScreen;
