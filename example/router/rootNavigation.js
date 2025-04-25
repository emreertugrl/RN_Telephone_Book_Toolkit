import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNewUser from '../screens/users/addNewUser';
import UsersScreen from '../screens/users';
import {ADDNEWUSER, USERS} from '../utils/routes';

const Stack = createNativeStackNavigator();

export default RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={UsersScreen} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
    </Stack.Navigator>
  );
};
