import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {},
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
