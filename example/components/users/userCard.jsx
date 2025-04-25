import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {themeColors} from '../../themes/themeColors';
import {ArrowRight2} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';
import {USERDETAİL} from '../../utils/routes';

// create a component
const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAİL, {user})}
      style={styles.container}>
      <View>
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderRadius: 70,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getRandomColor(),
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {getInitialNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flex: 1}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
          }}>
          {compareName(user.name, user.surname)}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
          }}>
          {user.email}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArrowRight2 color={themeColors.BLACK} size={30} variant="" />
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeColors.WHITE,
    padding: 10,
    marginTop: 4,
  },
});

//make this component available to the app
export default UserCard;
