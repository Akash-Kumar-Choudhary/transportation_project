import { createSlice} from "@reduxjs/toolkit";

const initialState={
    manu:null
}
const createmanu=createSlice({
    name:'manu',
    initialState:initialState,
    reducers:{
        setmanu(state,action){
            state.manu=action.payload
        }
    }
})

export const { setmanu } = createmanu.actions

export default createmanu