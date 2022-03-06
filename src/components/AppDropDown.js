import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../theme/theme';

const AppDropDown = props => {
  /**
   * This component used all over the application to handle select fields
   * data -> Must be passed as an array
   * Checkout -> https://github.com/hoaphantn7604/react-native-element-dropdown#dropdown-example-1
   * */
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      maxHeight={150}
      labelField="label"
      valueField="value"
      placeholder={props.placeholder}
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      {...props}
    />
  );
};

export default AppDropDown;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    color: colors.black,
    width: '95%',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.black,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
