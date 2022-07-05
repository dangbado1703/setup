import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { createSlice } from '@reduxjs/toolkit';
import { IFormDataAbout } from '../../../../model/formvalue/formDataAbout';

const initState = {
  showFunc: null as IconDefinition | null,
  checkClick: 1,
  dataInfo: [] as IFormDataAbout[],
};

const aboutSlice = createSlice({
  name: 'icon',
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
