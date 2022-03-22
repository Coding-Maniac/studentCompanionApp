import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {handleErpToken} from '../../utils/auth';

const AppHomeScreen = ({route: {params}}) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const getErpToken = async () => {
      const resp = await handleErpToken(params?.roll_number, params?.password);
      setToken(resp.token);
    };

    getErpToken();
  }, []);
  return (
    <View>
      <Text>asdsad</Text>
    </View>
  );
};

export default AppHomeScreen;
