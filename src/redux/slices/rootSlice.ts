import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'name',
        description: 'description',
        bio: 'biography',
        physical_appearance: 'appearance',
        universe: 'universe'
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload}
    }
})

//Export Reducer
export const reducer = rootSlice.reducer;
export const {chooseName} = rootSlice.actions;
