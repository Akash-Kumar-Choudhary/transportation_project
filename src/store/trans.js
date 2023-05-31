import { createSlice} from "@reduxjs/toolkit";

const initialState={
    tran:null
}
const createtran=createSlice({
    name:'tran',
    initialState:initialState,
    reducers:{
        settran(state,action){
            state.tran=action.payload
        }
    }
})

export const { settran } = createtran.actions

export default createtran