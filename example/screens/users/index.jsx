import {View, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';

export default UsersScreen = () => {
  const {users} = useSelector(state => state.users);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </View>
  );
};
