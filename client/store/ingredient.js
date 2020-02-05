import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ALL_INGREDIENTS = "GOT_ALL_INGREDIENTS";

/**
 * ACTION CREATORS
 */
const gotAllIngredients = ingredients => ({
  type: GOT_ALL_INGREDIENTS,
  ingredients
});

/**
 * THUNK CREATORS
 */
export const getAllIngredients = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/ingredients");
    dispatch(gotAllIngredients(data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * INITIAL STATE
 */
const initialState = { ingredients: [] };

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_INGREDIENTS:
      return { ...state, ingredients: [...action.ingredients] };
    default:
      return state;
  }
}
