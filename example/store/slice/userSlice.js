import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../actions/userActions';

const initialState = {
  users: [],
  // sunucuya istek atılacağı için yüklenme ve error durumları için
  pending: false,
  error: null,
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
      const updatedUsers = state.users.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
      state.users = updatedUsers;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.pending = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        console.log(action);
        state.users = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export const {addNewUser, deleteUser, updateUser} = userSlice.actions;

export default userSlice.reducer;
