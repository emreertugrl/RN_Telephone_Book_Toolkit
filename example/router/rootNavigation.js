import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from '../screens/users';
import {USERS} from '../utils/routes';

const Stack = createNativeStackNavigator();

export default RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={UsersScreen} />
    </Stack.Navigator>
  );
};
