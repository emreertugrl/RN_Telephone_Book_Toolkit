import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  title: 'Merhaba',
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
