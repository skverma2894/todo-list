const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        todos: [{ id: id, data: data }, ...state.todos],
      };

    case "DELETE_TODO":
      const idToRemove = action.payload;
      // console.log(`idToRemove: ${action.payload}`);

      const updatedTodos = state.todos.filter((item) => {
        // console.log(item.id);
        return item.id !== idToRemove;
      });
      return {
        todos: updatedTodos,
      };

    default:
      return state;
  }
};

export default TodoReducer;
