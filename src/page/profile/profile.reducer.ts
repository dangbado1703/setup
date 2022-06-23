import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postMethod } from '../../config/service/serviceAxios';
import { IFormInfo } from '../../model/profile.model';

const initState = {
    dataProfile: {} as IFormInfo
}

export const getProfile = createAsyncThunk('profile/getProfile', async (value: string | undefined) => {
    const data = await postMethod('/profile', value)
    console.log(data)
    return data
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
