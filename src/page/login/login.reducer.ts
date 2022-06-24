import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../config/service';
import IFormDataLogin from '../../model/formdata/login.data';
import IForm from '../../model/index.model';
import { IValueLogin } from '../../model/value.model';

const initState = {
  isAuthenticated: false,
};

export const login = createAsyncThunk('Login/login', async (value: IValueLogin) => {
  const response: IForm<IFormDataLogin> = await instance.post('/auth/login', value);
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('name', `${response.data.first_name} ${response.data.last_name} `);
  localStorage.setItem('username', response.data.username);
  return response.data;
});

const authenticate = createSlice({
  name: 'Login',
  initialState: initState,
  reducers: {
    reset() {
      return initState;
    },
    authen(state) {
      const isTrueAuthenticated = state;
      isTrueAuthenticated.isAuthenticated = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state) => {
      const loginFulfill = state;
      loginFulfill.isAuthenticated = true;
    });
  },
});

const loginReducer = authenticate.reducer;

export const { authen } = authenticate.actions;

export default loginReducer;
