import {createSlice} from "@reduxjs/toolkit";

export const nameTrainerSlice = createSlice({
    name: 'nameTrainer',
    initialState: '',
    reducers:{
        setNameTrainer: (state, action) => action.payload

    }
})

export default nameTrainerSlice.reducer
export const {setNameTrainer} =  nameTrainerSlice.actions