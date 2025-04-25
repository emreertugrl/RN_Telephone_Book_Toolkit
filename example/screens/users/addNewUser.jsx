import {Alert, ScrollView, View} from 'react-native';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {newUserSchema} from '../../utils/validationSchemas';
import {useDispatch} from 'react-redux';
import {addNewUser, updateUser} from '../../store/slice/userSlice';
import {useNavigation, useRoute} from '@react-navigation/native';
import {USERS} from '../../utils/routes';

const AddNewUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {user} = route.params || {};

  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: user?.id || new Date().getTime(),
          name: user?.name || '',
          surname: user?.surname || '',
          phoneNumber: user?.phoneNumber || '+90 555 123 45 67',
          email: user?.email || 'test@example.com',
          gender: user?.gender || 'male',
          age: user?.age || '30',
        }}
        validationSchema={newUserSchema}
        onSubmit={values => {
          {
            user ? dispatch(updateUser(values)) : dispatch(addNewUser(values));
          }
          Alert.alert(
            '',
            user ? 'Kullanıcı güncellendi' : 'Kullanıcı kaydedildi',
          );

          navigation.navigate(USERS);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="Name"
              placeholder="Please set name"
            />
            <Input
              error={errors.surname}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              title="Surname"
              placeholder="Please set surname"
            />
            <Input
              error={errors.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              title="Phone"
              placeholder="Please set phone"
              keyboardType="phone-pad"
            />
            <Input
              error={errors.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              title="Email"
              placeholder="Please set email"
              keyboardType="email-address"
            />
            <Input
              error={errors.gender}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              title="Gender"
              placeholder="Please set gender"
            />
            <Input
              error={errors.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              title="Age"
              placeholder="Please set age"
              keyboardType="number-pad"
            />
            <Button
              onPress={handleSubmit}
              title={user ? 'Update' : 'Save'}
              status={user ? '' : 'success'}
            />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewUser;
