const booksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.payload;
    case 'ADD_BOOK':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'UPDATE_BOOK':
      return state.map((book) =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book
      );
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
