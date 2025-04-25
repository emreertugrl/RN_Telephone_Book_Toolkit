import {StyleSheet, TouchableOpacity} from 'react-native';
import {themeColors} from '../../themes/themeColors';
import {Add} from 'iconsax-react-nativejs';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={40} color={themeColors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.GREEN,
    width: 80,
    height: 80,
    borderRadius: 100,
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});

//make this component available to the app
export default FloatActionButton;
