import {SIGNUP} from './constants';

export const handleUserSignUp = form_data => {
  fetch(SIGNUP, {
    method: 'POST',
    body: form_data,
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
