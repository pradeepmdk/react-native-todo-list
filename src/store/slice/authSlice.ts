import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    isLoggedIn: boolean;
}

const initialState: State = {
    isLoggedIn: false
}

  
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsloggedIn: (state, payload: PayloadAction<boolean>) => {
            state.isLoggedIn = payload.payload;
        },
    }
})


export const {  setIsloggedIn } = authSlice.actions

export default authSlice.reducer