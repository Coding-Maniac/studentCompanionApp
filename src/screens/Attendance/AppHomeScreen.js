import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {object} from 'yup';
import AppLoadingWrapper from '../../components/AppLoadingWrapper';
import {APP_GRADES_SCREEN} from '../../navigation/Routes';
import {userToken} from '../../store/slices/appSlice';
import {handleErpToken} from '../../utils/auth';
import {getUserAttendance} from '../../utils/functions';

const AppHomeScreen = ({route: {params}}) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const [attendanceData, setAttendanceData] = useState({});
  const [loading, setLoading] = useState(true);

  const {roll_number, password, erp_token, erp_authorize_loading} = useSelector(
    state => state.app.user,
  );

  useEffect(() => {
    const getErpToken = async () => {
      console.log('home screen params', params);
      dispatch(
        userToken({
          rollNumber: roll_number,
          password: password,
        }),
      );
    };

    getErpToken();
  }, []);

  useEffect(() => {
    const getAttendanceData = async () => {
      const data = await getUserAttendance(erp_token);

      setAttendanceData(data);
      setLoading(false);
      console.log(data);
    };

    if (!erp_authorize_loading) {
      getAttendanceData();
    }
  }, [erp_authorize_loading, erp_token]);
  return (
    <AppLoadingWrapper isLoading={loading}>
      <ScrollView
        style={{
          marginBottom: 30,
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Check Your Grades Too,
          <Text
            style={{
              fontWeight: 'bold',
            }}
            onPress={() => navigate.navigate(APP_GRADES_SCREEN)}>
            Click Here
          </Text>
        </Text>
        {Object.keys(attendanceData).map(subject => (
          <Card
            containerStyle={{
              backgroundColor: attendanceData[subject].safe ? 'white' : 'pink',
            }}>
            <Card.Divider>
              <Text>{subject}</Text>
            </Card.Divider>
            <Text>
              Attendance Percentage :{' '}
              <Text>
                {Math.round(attendanceData[subject].attendancePercentage)}
              </Text>
            </Text>

            <Text>
              Total Number of classes Attended:
              <Text>{attendanceData[subject].totalHoursPresent}</Text> /
              <Text>{attendanceData[subject].totalHours}</Text>
            </Text>
            {!attendanceData[subject].safe && (
              <Text>
                Number of Classes to Attend{' '}
                {attendanceData[subject].numberOfClassesToAttend}{' '}
              </Text>
            )}
          </Card>
        ))}
      </ScrollView>
    </AppLoadingWrapper>
  );
};

export default AppHomeScreen;
