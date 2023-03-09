import { createSlice} from "@reduxjs/toolkit";


export interface dummyData {
    loading:boolean
    airline?:[]
    error:boolean
}

const initialState : dummyData = {
    airline:[],
    loading:false,
    error:false

}

const  airlineSlice = createSlice({
    name:"airline",
    initialState:initialState,
    reducers:{
        fetchData: (state) => {
            state.loading  = true
        },
        fetchDataSuccess : (state,action) => {
            console.log("state",action)
            state.airline = action.payload
            state.loading = false
        },
        fetchDataFailure : (state,action) => {
            state.airline = action.payload
            state.loading = false
        }
    }
})

export const {fetchData,fetchDataSuccess,fetchDataFailure} = airlineSlice.actions

export default airlineSlice.reducer