import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../config/service';
import IForm from '../../model/index.model';
import { IFormRegister } from '../../model/value.model';

const initState = {
  isRegisterSuccess: false,
  messageSuccess: '',
};
export const registerAccount = createAsyncThunk('register/registerAccount', async (value: IFormRegister) => {
  const response: IForm<IFormRegister> = await instance.post('auth/register', value);
  return response;
});
const register = createSlice({
  name: 'register',
  initialState: initState,
  reducers: {
    resetState() {
      return initState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerAccount.fulfilled, (state, action) => {
        const registerAccountFulfill = state;
        registerAccountFulfill.messageSuccess = action.payload.message;
        registerAccountFulfill.isRegisterSuccess = true;
      })
      .addCase(registerAccount.pending, (state) => {
        const registerAccountPending = state;
        registerAccountPending.isRegisterSuccess = false;
      })
      .addCase(registerAccount.rejected, (state) => {
        const registerAccountRejected = state;
        registerAccountRejected.isRegisterSuccess = false;
      });
  },
});

const registerReducer = register.reducer;
export const { resetState } = register.actions;
export default registerReducer;
