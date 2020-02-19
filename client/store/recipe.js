import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ALL_RECIPES = "GOT_ALL_RECIPES";
const GOT_SINGLE_RECIPE = "GOT_SINGLE_RECIPE";
const ADD_RECIPE = "ADD_RECIPE";

/**
 * ACTION CREATORS
 */
const gotAllRecipes = recipes => ({ type: GOT_ALL_RECIPES, recipes });
const gotSingleRecipe = recipes => ({ type: GOT_SINGLE_RECIPE, recipes });
const addRecipe = recipes => ({ type: ADD_RECIPE, recipes });

/**
 * THUNK CREATORS
 */
export const getAllRecipes = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/recipes");
    dispatch(gotAllRecipes(data));
  } catch (err) {
    console.error(err);
  }
};

export const getSingleRecipe = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/recipes/${id}`);
    dispatch(gotSingleRecipe(data));
  } catch (err) {
    console.log(err);
  }
};

export const postRecipe = (name, bookId) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/recipes`, {
        name,
        bookId
      });
      dispatch(addRecipe(data));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * INITIAL STATE
 */
const initialState = { recipes: [], singleRecipe: {} };

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_RECIPES:
      return { ...state, recipes: [...action.recipes] };
    case GOT_SINGLE_RECIPE:
      return { ...state, singleRecipe: { ...action.recipes } };
    case ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, action.recipes] };
    default:
      return state;
  }
}
