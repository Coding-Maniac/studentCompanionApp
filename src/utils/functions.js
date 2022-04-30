import {
  GET_ATTENDACE,
  GET_GRADES_COUNT,
  GET_INDIVIDUAL_SEM_GRADE_COUNT,
} from './constants';

const getAuthorizedHeader = token => ({
  Accept: 'application/json',
  'content-type': 'application/json',
  Authorization: token,
});

export const getUserAttendance = token => {
  return fetch(GET_ATTENDACE, {
    method: 'GET',
    headers: getAuthorizedHeader(token),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export const getUserGradesCount = (token, semester) => {
  console.log('Erp token in api', token);
  return fetch(GET_INDIVIDUAL_SEM_GRADE_COUNT(semester), {
    method: 'GET',
    headers: getAuthorizedHeader(token),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};
