import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoListReducer from './todoList';

export const store = configureStore({
      reducer : {
        counter: counterReducer,
        todoList: todoListReducer,
      }
  });