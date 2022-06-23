import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Params } from 'react-router-dom';
import { postMethod } from '../../config/service/serviceAxios';
import { IFormInfo } from '../../model/profile.model';

const initState = {
    dataProfile: {} as IFormInfo
}

export const getProfile = createAsyncThunk('profile/getProfile', async (username: Readonly<Params<string>>) => {
    return await postMethod('/profile', username)
})

const profileSlice = createSlice({
    name: 'profile',
    initialState: initState,
    reducers: {
        reset() {
            return initState
        }
    },
    extraReducers(builder) {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.dataProfile = action.payload
        })
    },
})

const profileReducer = profileSlice.reducer

export default profileReducer