import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      const filteredUsers = state.users.filter(
        item => item.id !== action.payload,
      );
      state.users = filteredUsers;
    },
    updateUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const {addNewUser, deleteUser, updateUser} = userSlice.actions;

export default userSlice.reducer;
