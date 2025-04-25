import {StyleSheet, Text, TextInput, View} from 'react-native';
import {themeColors} from '../../themes/themeColors';

const Input = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    color: themeColors.BLACK,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    backgroundColor: themeColors.INPUT,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
