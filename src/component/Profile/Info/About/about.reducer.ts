import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../../../config/service';
import { IFormDataAbout } from '../../../../model/formvalue/formDataAbout';
import { getProfile } from '../../../../page/profile/profile.reducer';
import { AppThunk } from '../../../../redux/store';

const initState = {
  showFunc: null as IconDefinition | null,
  checkClick: 1,
  dataInfo: [] as IFormDataAbout[],
};
interface IFormBody {
  username: string | undefined;
  schoolName: string;
}

const update = createAsyncThunk('about/update', async (body: IFormBody) => {
  const data = await instance.post('/profile/update', body);
  return data;
});

export const updateProfile =
  (body: IFormBody): AppThunk =>
  async (dispatch) => {
    await dispatch(update(body));
    await dispatch(
      getProfile({
        username: body.username,
      })
    );
  };

const aboutSlice = createSlice({
  name: 'about',
  initialState: initState,
  reducers: {
    saveIconAbout(state, action) {
      const stateShowFunc = state;
      stateShowFunc.showFunc = action.payload;
    },
    clearIconAbout(state) {
      const stateHideFunc = state;
      stateHideFunc.showFunc = null;
    },
    setCheckClick(state, action) {
      const stateCheckClick = state;
      stateCheckClick.checkClick = action.payload;
    },
    saveData(state, action) {
      const stateDataInfo = state;
      stateDataInfo.dataInfo = stateDataInfo.dataInfo.concat(action.payload);
    },
  },
});

const aboutReducer = aboutSlice.reducer;
export default aboutReducer;
export const { saveIconAbout, clearIconAbout, setCheckClick, saveData } = aboutSlice.actions;
