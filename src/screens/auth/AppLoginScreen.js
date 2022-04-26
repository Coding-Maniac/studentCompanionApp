import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import {colors} from '../../theme/theme';
import {appStyle} from '../../theme/appStyle';
import {
  handleErpToken,
  handleUserLogin,
  storeCredentials,
} from '../../utils/auth';
import {APP_HOME_SCREEN, APP_SIGNUP_SCREEN} from '../../navigation/Routes';
import {AppLogo} from '../../assets';
import AppHandleForm from '../../components/AppHandleForm';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../store/slices/appSlice';

const AppLoginScreen = ({navigation}) => {
  /**
   * This component is used when a user logins into the application
   * */
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const {roll_number, password} = useSelector(state => state.app.user);
  const {commonError, isLoading, loginSuccess} = useSelector(state => state.app.login);

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

  useEffect(() => {
    if(loginSuccess){
      navigation.navigate('home', {
        roll_number: values.roll_number,
        password: values.password,
      });
      navigation.navigate(APP_HOME_SCREEN);
    }
  }, [loginSuccess])

  const handleFormSubmit = async values => {
    console.log("Form Values", values)
    dispatch(userLogin(values));
    
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate(APP_SIGNUP_SCREEN);
  };

  console.log('Roll Number', roll_number);
  console.log('Password', password);

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
        ctaText="Login"
        commonError={commonError}
        isLoading={isLoading}>
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
