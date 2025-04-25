import {View, Text} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';

export default UsersScreen = () => {
  const {title} = useSelector(state => state.users);
  return (
    <View style={defaultScreenStyle.container}>
      <Text>{title}</Text>
    </View>
  );
};
