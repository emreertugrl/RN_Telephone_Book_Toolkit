//import liraries
import {View, Text} from 'react-native';
import {themeColors} from '../../themes/themeColors';

// create a component
const InfoRow = ({icon: Icon, text, marginVertical}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      paddingVertical: 10,
      borderColor: themeColors.GRAY,
      marginVertical: marginVertical || 0,
    }}>
    <Icon />
    <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
      {text}
    </Text>
  </View>
);

export default InfoRow;
