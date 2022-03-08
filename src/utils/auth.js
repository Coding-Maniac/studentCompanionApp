import {ERP_AUTHORIZE, ERP_TOKEN, LOGIN, SIGNUP} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const applicationHeaders = {
  Accept: 'application/json',
  'content-type': 'application/json',
};

export const handleUserSignUp = form_data => {
  return fetch(SIGNUP, {
    method: 'POST',
    body: JSON.stringify(form_data),
    headers: applicationHeaders,
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export const handleUserLogin = form_data => {
  return fetch(LOGIN, {
    method: 'POST',
    body: JSON.stringify(form_data),
    headers: applicationHeaders,
  })
    .then(res => res.json())
    .then(resJ => resJ)
    .catch(err => err);
};

export const handleErpToken = async (roll_number, password) => {
  fetch(ERP_AUTHORIZE, {
    method: 'POST',
    body: {
      roll_number,
      password,
    },
    headers: applicationHeaders,
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const storeCredentials = async (roll_number, password) => {
  await AsyncStorage.setItem('roll_number', roll_number);
  await AsyncStorage.setItem('password', password);
};
