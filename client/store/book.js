import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ALL_BOOKS = "GOT_ALL_BOOKS";
const GOT_SINGLE_BOOK = "GOT_SINGLE_BOOK";

/**
 * ACTION CREATORS
 */
const gotAllBooks = books => ({ type: GOT_ALL_BOOKS, books });
const gotSingleBook = books => ({ type: GOT_SINGLE_BOOK, books });

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
    default:
      return state;
  }
}
