import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postMethod } from '../../config/service/serviceAxios';
import { IFormRegister } from '../../model/value.model';

const initState = {
  isRegisterSuccess: false,
  messageSuccess: '',
};

export const registerAccount = createAsyncThunk('register/registerAccount', async (value: IFormRegister) => {
  const response = await postMethod('auth/register', value);
  return response;
});

const register = createSlice({
  name: 'register',
  initialState: initState,
  reducers: {
    resetState(state) {
      return initState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.messageSuccess = action.payload.message;
        state.isRegisterSuccess = true;
      })
      .addCase(registerAccount.pending, (state) => {
        state.isRegisterSuccess = false;
      })
      .addCase(registerAccount.rejected, (state) => {
        state.isRegisterSuccess = false;
      });
  },
});

const registerReducer = register.reducer;
export const { resetState } = register.actions;
export default registerReducer;
