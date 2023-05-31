import { createSlice} from "@reduxjs/toolkit";

const initialState={
    user:null
}
const createUser=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        setUser(state,action){
            state.user=action.payload
        }
    }
})

export const { setUser } = createUser.actions

export default createUser