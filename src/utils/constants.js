/**
 * Common file to maintain constants such as API host and stuff
 * */

export const API_HOST = 'https://studentcompanion.sanjaykapilesh.me';

// API_URLS
export const SIGNUP = `${API_HOST}/auth/signup`;
export const LOGIN = `${API_HOST}/auth/login`;
export const ERP_AUTHORIZE = `${API_HOST}/erp/authorize`;
export const GET_ATTENDACE = `${API_HOST}/attendance`;
export const GET_GRADES = `${API_HOST}/grades`;
export const GET_GRADES_COUNT = `${API_HOST}/grades/count`;
export const GET_INDIVIDUAL_SEM_GRADE_COUNT = semId =>
  `${API_HOST}/grades/count/${semId}`;
