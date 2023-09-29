import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'Pepito',
    initialState: '',
    reducers: {
        setTrainerSlice:(state, action) => action.payload
    }
})

export const { setTrainerSlice } = trainerSlice.actions;

export default trainerSlice.reducer;
