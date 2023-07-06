import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoResponse } from "../../types/todo.service";

interface State {
    listType: number;
    loading: boolean;
    data: ITodoResponse[]
}

const initialState: State = {
    listType: 0,
    loading: false,
    data: []
}

  
export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        setLoading: (state, payload: PayloadAction<boolean>) => {
            state.loading = payload.payload;
        },
        setTodoData: (state, payload: PayloadAction<ITodoResponse[]>) => {
            state.data = payload.payload;
        },
        setIsListType: (state, payload: PayloadAction<number>) => {
            state.listType = payload.payload;
        },
    }
})


export const {  setIsListType, setLoading, setTodoData } = todoSlice.actions

export default todoSlice.reducer