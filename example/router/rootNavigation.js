import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNewUser from '../screens/users/addNewUser';
import UsersScreen from '../screens/users';
import {ADDNEWUSER, USERDETAİL, USERS} from '../utils/routes';
import UserDetail from '../screens/users/userDetail';

const Stack = createNativeStackNavigator();

export default RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={UsersScreen} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAİL} component={UserDetail} />
    </Stack.Navigator>
  );
};
