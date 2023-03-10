import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type User = {
    id: number,
    name: string
}


type InitialState = {
    loading: boolean,
    users: User[],
    error: string
}

const initialState: InitialState = {
    loading: false,
    users: [
        {
            id: 1,
            name: "John Doe"
        },
        {
            id: 2,
            name: "Sasil"
        },
        {
            id: 3,
            name: "Mark"
        },
        {
            id: 4,
            name: "Elon Musk"
        },
        {
            id: 5,
            name: "JoeBiden"
        }
    ],
    error: ""

}



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchData: (state) => {
            state.loading = true
        },
        fetchDataSuccess: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload,
            state.loading = false
        },
        fetchDataFailure: (state, action) => {
            state.users = action.payload,
            state.loading = false
        }

    }
})

export const { fetchData, fetchDataSuccess, fetchDataFailure } = userSlice.actions

export default userSlice.reducer
