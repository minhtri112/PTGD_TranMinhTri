import { createSlice } from '@reduxjs/toolkit';

const initialState = 
    [
        { id: 1, text: "Làm bài tập lập trình", completed: false },
        { id: 2, text: "Chạy bộ 30 phút", completed: true },
        { id: 3, text: "Đọc tài liệu Redux Toolkit", completed: false }
    ]
;

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add : (state, action) => {
        return [...state, action.payload];
    },
    remove : (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
    },
    complete : (state, action) => {
        return state.map(item => {
            return item.id === action.payload ? {...item, completed: !item.completed} : item;            
        });
    },
  },
});

export const { add,remove,complete} = todoListSlice.actions;
export default todoListSlice.reducer;