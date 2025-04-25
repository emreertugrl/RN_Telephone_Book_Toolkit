import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Ahmet',
      surname: 'Siyah',
      age: 24,
      address: 'İstanbul/Kadıköy',
      phone: '5555555555',
      email: 'test@gmail.com',
      profileImage: '',
      gender: 'Erkek',
    },
  ],
};
const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const {addNewUser} = userSlice.actions;

export default userSlice.reducer;
