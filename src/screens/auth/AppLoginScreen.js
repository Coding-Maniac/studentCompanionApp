import React from 'react';
import {View} from 'react-native';
import {Button, Card, Input} from 'react-native-elements';
import {colors} from '../../theme/theme';
import {appStyle} from '../../theme/appStyle';

const AppLoginScreen = () => {
  /**
   * This component is used when a user logins into the application
   * */
  return (
    <View style={appStyle.pageFormCenterView}>
      <Card>
        <Card.Divider>
          <Card.Title>Login</Card.Title>
        </Card.Divider>
        <View style={appStyle.containerCenterContent}>
          <Input keyboardType="number-pad" placeholder="Roll Number" />
          <Input secureTextEntry={true} placeholder="Password" />
          <Button
            title="Login"
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

export default AppLoginScreen;
