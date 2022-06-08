import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { WritableDraft } from 'immer/dist/internal';
import { postMethod } from '../../config/service/serviceAxios';
import { IValue, IValueLogin } from '../../model/value.model';

const initState = {
  isAuthenticated: false,
};

const login = createAsyncThunk('Login/login', async (value: IValue<IValueLogin>) => {
  const response: AxiosResponse = await postMethod('/login', '', value);
  localStorage.setItem('token', response.data.token);
  return response.data;
});

const authenticate = createSlice({
  name: 'Login',
  initialState: initState,
  reducers: {
    reset(
      state: WritableDraft<{
        isAuthenticated: boolean;
      }>
    ) {
      return initState;
    },
    authen(state) {
      state.isAuthenticated = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
  },
});

const loginReducer = authenticate.reducer;

export const { authen } = authenticate.actions;

export default loginReducer;
