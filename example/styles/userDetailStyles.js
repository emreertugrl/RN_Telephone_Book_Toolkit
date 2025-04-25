import {StyleSheet} from 'react-native';
import {themeColors} from '../themes/themeColors';

const userDetailStyles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    borderBottomWidth: 0.5,
    borderColor: themeColors.GRAY,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  nameContainer: {
    padding: 10,
    flex: 1,
  },
  nameText: {
    fontSize: 30,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 50,
  },
});

export default userDetailStyles;
