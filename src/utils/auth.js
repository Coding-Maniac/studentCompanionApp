import {LOGIN, SIGNUP} from './constants';

export const handleUserSignUp = form_data => {
  fetch(SIGNUP, {
    method: 'POST',
    body: form_data,
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const handleUserLogin = form_data => {
  return fetch(LOGIN, {
    method: 'POST',
    body: JSON.stringify(form_data),
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(resJ => resJ)
    .catch(err => err);
};
