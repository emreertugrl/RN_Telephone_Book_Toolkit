import {View, FlatList, Text} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWUSER} from '../../utils/routes';

export default UsersScreen = () => {
  const navigation = useNavigation();
  const {users} = useSelector(state => state.users);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center'}}>
            Henüz bir kullanıcı eklenmedi
          </Text>
        }
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};
