// userCardStyles.js

import {StyleSheet} from 'react-native';
import {themeColors} from '../themes/themeColors';

const userCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeColors.WHITE,
    padding: 10,
    marginTop: 4,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfo: {
    padding: 10,
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
  },
  userEmail: {
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default userCardStyles;
