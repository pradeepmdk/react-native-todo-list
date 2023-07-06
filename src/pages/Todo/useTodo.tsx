import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store';
import {setLoading, setTodoData} from '../../store/slice/todoSlice';
import { getTodoList1, getTodoList2 } from '../../service/todo.service';

export default function useTodo() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.todo.loading);
  const listType = useAppSelector(state => state.todo.listType);
  const data = useAppSelector(state => state.todo.data);


  const loadTodo1 = async () => {
    try {
      dispatch(setLoading(true));
      let {data}  = await getTodoList1();
      dispatch(setTodoData(data)); 
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const loadTodo2 = async () => {
    try {
      dispatch(setLoading(true));
      let {data}  = await getTodoList2();
      dispatch(setTodoData(data)); 
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (listType == 1) {
      loadTodo1();
    }

    if (listType == 2) {
      loadTodo2();
    }
  }, [listType]);

  return {
    loading,data
  };
}
