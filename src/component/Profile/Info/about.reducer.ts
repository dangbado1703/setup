import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { createSlice } from '@reduxjs/toolkit';

const initState = {
  showFunc: null as IconDefinition | null,
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
  },
});

const aboutReducer = aboutSlice.reducer;
export default aboutReducer;
export const { saveIconAbout, clearIconAbout } = aboutSlice.actions;
