import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { WritableDraft } from 'immer/dist/internal';
import { postMethod } from '../../config/service/serviceAxios';
import { IValueLogin } from '../../model/value.model';

const initState = {
  isAuthenticated: false,
};

export const login = createAsyncThunk('Login/login', async (value: IValueLogin) => {
  const response: AxiosResponse = await postMethod('/auth/login', value);
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('name', response.data.first_name + ' ' + response.data.last_name);
  localStorage.setItem('username', response.data.username);
  // console.log(response.data);
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
