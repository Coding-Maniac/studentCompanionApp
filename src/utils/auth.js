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

export const handleErpToken = body => {
  console.log('Erp Token Roll Number', body);
  console.log('Erp password', body);

  return fetch(ERP_AUTHORIZE, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: applicationHeaders,
  })
    .then(res => res.json())
    .then(resJ => resJ)
    .catch(err => err);
};

export const storeCredentials = async (roll_number, password) => {
  await AsyncStorage.setItem('roll_number', JSON.stringify(roll_number));
  await AsyncStorage.setItem('password', password);
  return;
};

export const saveToken = async token => {
  await AsyncStorage.setItem('token', token);
};
