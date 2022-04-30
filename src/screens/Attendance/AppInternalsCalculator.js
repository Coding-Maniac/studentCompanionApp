import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Card, colors, Input} from 'react-native-elements';
import AppInput from '../../components/AppInput';
// {
//       placeholder: 'Section',
//       data: sectionData,
//       name: 'section',
//     },
const AppInternalsCalculator = () => {
  const [formValues, setFormValues] = useState({
    internal_1: 0,
    internal_2: 0,
  });

  const [displayText, setDisplayText] = useState(null);

  const handleInternalCalculator = () => {
    const {internal_1, internal_2} = formValues;
    console.log('Internal 1', internal_1);
    console.log('Internal 2', internal_2);
    const totalInternal = parseInt(internal_1) + parseInt(internal_2, 10);
    const requiredTotalInternal = 30;
    if (totalInternal < requiredTotalInternal) {
      setDisplayText(
        `The total internal marks required is ${
          requiredTotalInternal - parseInt(totalInternal)
        }`,
      );
    } else {
      return setDisplayText(
        `You have passed your internals, Good luck for your semester`,
      );
    }
  };
  return (
    <Card>
      <View>
        <Text
          style={{
            textAlign: 'center',
          }}>
          Enter your internal marks
        </Text>
        <Text>Internal 1</Text>
        <AppInput
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={() => {}}
          handleBlur={() => {}}
          placeholder="Internal 1"
          name="internal_1"
          value={formValues['internal_1']}
        />
        <Text>Internal 2</Text>
        <AppInput
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={() => {}}
          handleBlur={() => {}}
          placeholder="Internal 2"
          name="internal_2"
          value={formValues['internal_2']}
        />
        <Text
          style={{
            marginBottom: 30,
          }}>
          {displayText}
        </Text>
        <Button
          title="Calculate"
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
          containerStyle={{
            width: 200,
            margin: 'auto',
          }}
          onPress={handleInternalCalculator}
          titleStyle={{color: colors.white}}
        />
      </View>
    </Card>
  );
};

export default AppInternalsCalculator;
