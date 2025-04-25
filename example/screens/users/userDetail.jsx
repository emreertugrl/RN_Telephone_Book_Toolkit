//import liraries
import {View, Text, ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useRoute} from '@react-navigation/native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {themeColors} from '../../themes/themeColors';
import {Calendar, Call, Man, Sms, Woman} from 'iconsax-react-nativejs';
import InfoRow from '../../components/users/infoRow';
import Button from '../../components/ui/button';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../store/slice/userSlice';
import {ADDNEWUSER} from '../../utils/routes';

// create a component
const UserDetail = ({navigation}) => {
  const route = useRoute();
  const {user} = route.params;
  const dispatch = useDispatch();

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomWidth: 0.5,
            borderColor: themeColors.GRAY,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: getRandomColor(),
            }}>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>
              {getInitialNameSurname(user.name, user.surname)}
            </Text>
          </View>
          <View style={{padding: 10, flex: 1}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '500',
              }}>
              {compareName(user.name, user.surname)}
            </Text>
          </View>
        </View>
        <View>
          <InfoRow icon={Sms} text={user.email} marginVertical={10} />
          <InfoRow icon={Call} text={user.phoneNumber} />
          <InfoRow
            icon={user.gender === 'male' ? Man : Woman}
            text={user.gender}
            marginVertical={20}
          />
          <InfoRow icon={Calendar} text={user.age.toString()} />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            onPress={() => {
              dispatch(deleteUser(user.id));
              navigation.goBack();
            }}
            title="Delete User"
            status="warning"
          />
          <Button
            onPress={() => navigation.navigate(ADDNEWUSER, {user: user})}
            title="Update User"
            status=""
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;
