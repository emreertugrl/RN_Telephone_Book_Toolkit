import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWUSER} from '../../utils/routes';
import RemoteUserCard from '../../components/users/remoteUserCard';
import {useEffect} from 'react';
import {getUsers} from '../../store/actions/userActions';
import {themeColors} from '../../themes/themeColors';

export default RemoteUsersScreen = () => {
  const navigation = useNavigation();
  const {users, pending, error} = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({results: 10}));
    console.log(users);
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size="large" color={themeColors.BLACK} />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text style={{textAlign: 'center'}}>
              Henüz bir kullanıcı eklenmedi...
            </Text>
          }
          data={users}
          keyExtractor={item => item.email}
          renderItem={({item}) => <RemoteUserCard user={item} />}
        />
      )}
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};
