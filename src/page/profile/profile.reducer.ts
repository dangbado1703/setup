import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../config/service';
import IForm from '../../model/index.model';
import { IFormInfo } from '../../model/profile.model';

const initState = {
  dataProfile: {} as IFormInfo,
};

export const getProfile = createAsyncThunk('profileUser/getProfile', async (value: { username: string }) => {
  const data: IForm<IFormInfo> = await instance.post('/profile', value);
  return data.data;
});

const profileSlice = createSlice({
  name: 'profileUser',
  initialState: initState,
  reducers: {
    reset() {
      return initState;
    },
  },
  extraReducers(builder) {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      const getProfilefulfilled = state;
      getProfilefulfilled.dataProfile = action.payload;
    });
  },
});

const profileReducer = profileSlice.reducer;

export default profileReducer;
