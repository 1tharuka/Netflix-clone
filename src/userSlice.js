import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'counter',
  initialState :{
     user : null,
  },
  reducers: {
    login:(state,actions) =>{
        state.user = actions.payload;
    },
    logout:(state) =>{
        state.user = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = UserSlice.actions;
export const selectUser = (state) =>state.user.user;
export default UserSlice.reducer;