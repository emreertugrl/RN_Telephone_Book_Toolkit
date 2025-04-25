import {View, Text, Pressable} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {themeColors} from '../../themes/themeColors';
import {ArrowRight2} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';
import {USERDETAİL} from '../../utils/routes';
import userCardStyles from '../../styles/userCardStyles';

// create a component
const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAİL, {user})}
      style={userCardStyles.container}>
      <View>
        <View
          style={[
            userCardStyles.avatarContainer,
            {backgroundColor: getRandomColor()},
          ]}>
          <Text style={userCardStyles.avatarText}>
            {getInitialNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>
      <View style={userCardStyles.userInfo}>
        <Text style={userCardStyles.userName}>
          {compareName(user.name, user.surname)}
        </Text>
        <Text style={userCardStyles.userEmail}>{user.email}</Text>
      </View>
      <View style={userCardStyles.iconContainer}>
        <ArrowRight2 color={themeColors.BLACK} size={30} />
      </View>
    </Pressable>
  );
};

export default UserCard;
