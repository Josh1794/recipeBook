import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ALL_BOOKS = "GOT_ALL_BOOKS";
const GOT_SINGLE_BOOK = "GOT_SINGLE_BOOK";
const ADD_BOOK = "ADD_BOOK";
// const DELETE_BOOK = "DELETE_BOOK";

/**
 * ACTION CREATORS
 */
const gotAllBooks = books => ({ type: GOT_ALL_BOOKS, books });
const gotSingleBook = books => ({ type: GOT_SINGLE_BOOK, books });
const addBook = books => ({ type: ADD_BOOK, books });
// const deletedBook = books => ({ type: DELETE_BOOK, books });

/**
 * THUNK CREATORS
 */
export const getAllBooks = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/books`);
    dispatch(gotAllBooks(data));
  } catch (err) {
    console.error(err);
  }
};

export const getSingleBook = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/books/${id}`);
    dispatch(gotSingleBook(data));
  } catch (err) {
    console.log(err);
  }
};

export const postBook = (name, description, userId) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/books`, {
        name,
        description,
        userId
      });
      dispatch(addBook(data));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

//DELETE ROUTE NEEDS WORK
// export const deleteBook = () => async dispatch => {
//   try {
//     const { data } = await axios.delete(`/api/books`);
//     dispatch(deletedBook(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

/**
 * INITIAL STATE
 */
const initialState = { books: [], singleBook: {} };

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_BOOKS:
      return { ...state, books: [...action.books] };
    case GOT_SINGLE_BOOK:
      return { ...state, singleBook: { ...action.books } };
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.books] };
    //NEEDS WORK
    //case DELETE_BOOK:
    // return { ...state, books}
    default:
      return state;
  }
}
