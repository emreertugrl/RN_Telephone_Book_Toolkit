import * as Yup from 'yup';

const phoneRegExp = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

const newUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),

  surname: Yup.string()
    .min(2, 'Surname is too short')
    .max(50, 'Surname is too long')
    .required('Surname is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  phoneNumber: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be in the format: +X... XXX XXX XX XX (1 to 3 digits for country code)',
    )
    .required('Phone number is required'),

  gender: Yup.string().required('Gender is required'),

  age: Yup.number()
    .min(10, 'You must be at least 10 years old')
    .max(100, 'Age must be 100 or below')
    .required('Age is required'),
});

export {newUserSchema};
