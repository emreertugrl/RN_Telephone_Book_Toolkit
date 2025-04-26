//import liraries
import {View, Text, ScrollView, Image} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useRoute} from '@react-navigation/native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {Calendar, Call, Man, Sms, Woman} from 'iconsax-react-nativejs';
import InfoRow from '../../components/users/infoRow';
import Button from '../../components/ui/button';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../store/slice/userSlice';
import {ADDNEWUSER} from '../../utils/routes';
import userDetailStyles from '../../styles/userDetailStyles';

const UserDetail = ({navigation}) => {
  const route = useRoute();
  const {user} = route.params;
  const dispatch = useDispatch();

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        {user?.picture.medium ? (
          <Image
            source={{uri: user.picture.medium}}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70,
              resizeMode: 'contain',
            }}
          />
        ) : (
          <View style={userDetailStyles.headerContainer}>
            <View
              style={[
                userDetailStyles.avatarContainer,
                {backgroundColor: getRandomColor()},
              ]}>
              <Text style={userDetailStyles.avatarText}>
                {getInitialNameSurname(
                  user?.name?.first,
                  user?.surname || user?.name?.last,
                )}
              </Text>
            </View>
            <View style={userDetailStyles.nameContainer}>
              <Text style={userDetailStyles.nameText}>
                {compareName(
                  user?.name?.first,
                  user?.surname || user?.name?.last,
                )}
              </Text>
            </View>
          </View>
        )}

        <View>
          <InfoRow icon={Sms} text={user.email} marginVertical={10} />
          <InfoRow icon={Call} text={user?.phoneNumber || user?.phone} />
          <InfoRow
            icon={user?.gender === 'male' ? Man : Woman}
            text={user?.gender}
            marginVertical={20}
          />
          <InfoRow
            icon={Calendar}
            text={
              user?.age?.toString() || user?.registered?.age < 18
                ? 25
                : user.registered.age
            }
          />
        </View>
        <View style={userDetailStyles.buttonContainer}>
          <Button
            onPress={() => {
              dispatch(deleteUser(user?.id));
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
