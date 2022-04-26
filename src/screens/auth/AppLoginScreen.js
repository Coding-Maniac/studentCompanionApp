import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Image, Text } from 'react-native-elements';
import { colors } from '../../theme/theme';
import { appStyle } from '../../theme/appStyle';
import {
  handleErpToken,
  handleUserLogin,
  storeCredentials,
} from '../../utils/auth';
import { APP_HOME_SCREEN, APP_SIGNUP_SCREEN } from '../../navigation/Routes';
import { AppLogo } from '../../assets';
import AppHandleForm from '../../components/AppHandleForm';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/slices/appSlice';
import AppHandleInput from '../../components/AppHandleInput';

const AppLoginScreen = ({ navigation }) => {
  /**
   * This component is used when a user logins into the application
   * */
  const [formValues, setFormValues] = useState({})
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { roll_number, password, loginSuccess } = useSelector(state => state.app.user);
  const { commonError, isLoading } = useSelector(state => state.app.login);

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
    console.log("In Use effect")
    if (loginSuccess) {
      navigation.navigate('home', {
        roll_number: formValues.roll_number,
        password: formValues.password,
      });
      navigation.navigate(APP_HOME_SCREEN);
    }
  }, [loginSuccess])

  const handleFormSubmit = () => {
    dispatch(userLogin(formValues));
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate(APP_SIGNUP_SCREEN);
  };

  console.log('Roll Number', roll_number);
  console.log('Password', password);

  return (
    <View style={appStyle.pageFormCenterView}>
      <Card>
        <Card.Divider>
          <Card.Title>Login</Card.Title>
        </Card.Divider>
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
        <View style={appStyle.containerCenterContent}>
          {formInputFields.map(data => (
            <AppHandleInput
              data={data}
              formValues={formValues}
              setFormValues={setFormValues}
              handleChange={(e) => {
                console.log(e)
              }}
              handleBlur={(e) => {
                console.log(e)
              }}
            />
          ))}
          <Button
            title="Login"
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
            containerStyle={{
              width: 200,
            }}
            titleStyle={{ color: colors.white }}
            onPress={handleFormSubmit}
          />
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
              titleStyle={{ color: colors.black }}
            />
          </View>
        </View>
      </Card>




    </View>
  );
};

export default AppLoginScreen;
