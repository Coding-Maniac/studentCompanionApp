/**
 * A common file to maintain form data for the entire application
 * */

const STUDENT = 'student';
const TEACHER = 'teacher';

const accountTypeData = [
  {label: 'Student', value: STUDENT},
  {label: 'Teacher', value: TEACHER},
];
const departmentData = [
  {
    label: 'CSE',
    value: 'cse',
  },
  {
    label: 'ECE',
    value: 'ece',
  },
];

const sectionData = [
  {label: 'A', value: 'a'},
  {label: 'B', value: 'b'},
  {label: 'C', value: 'c'},
  {label: 'D', value: 'd'},
];

export {accountTypeData, departmentData, sectionData, STUDENT, TEACHER};
