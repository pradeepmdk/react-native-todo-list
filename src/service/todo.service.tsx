import instance from '.';
import {ITodoResponse} from '../types/todo.service';

export const getTodoList1 = () => {
  return instance.get<ITodoResponse[]>('https://todo1.free.beeceptor.com/todos');
};

export const getTodoList2 = () => {
  return instance.get<ITodoResponse[]>('https://jsonplaceholder.typicode.com/todos');
};
