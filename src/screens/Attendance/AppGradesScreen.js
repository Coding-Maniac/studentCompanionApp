import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {useSelector} from 'react-redux';
import AppLoadingWrapper from '../../components/AppLoadingWrapper';
import {APP_INTERNAL_CALCULATOR_SCREEN} from '../../navigation/Routes';
import {getUserGradesCount} from '../../utils/functions';

const AppGradesScreen = () => {
  const [gradesData, setGradesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {erp_token} = useSelector(state => state.app.user);
  const navigation = useNavigation();
  console.log('Erp token', erp_token);
  useEffect(() => {
    const getGradesData = async () => {
      for (let sem = 1; sem < 9; sem++) {
        const currentSemData = await getUserGradesCount(erp_token, sem);
        gradesData.push(currentSemData);
        setGradesData(gradesData);
      }
      setLoading(false);
    };
    getGradesData();
  }, []);

  console.log('Grades Data', gradesData);
  return (
    <AppLoadingWrapper isLoading={loading}>
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Want to Calculate your internals?
          <Text
            style={{
              fontWeight: 'bold',
            }}
            onPress={() => {
              navigation.navigate(APP_INTERNAL_CALCULATOR_SCREEN);
            }}>
            Click Here
          </Text>
        </Text>
        {gradesData.map((data, index) => (
          <Card>
            <Card.Divider>
              <Text>Semester {index + 1}</Text>
            </Card.Divider>

            {Object.keys(data).length > 0 ? (
              Object.keys(data).map(grade => (
                <Text>
                  {grade} : {data[grade]}
                </Text>
              ))
            ) : (
              <Text>Has No Grades</Text>
            )}
          </Card>
        ))}
      </ScrollView>
    </AppLoadingWrapper>
  );
};

export default AppGradesScreen;
