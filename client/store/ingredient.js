import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ALL_INGREDIENTS = "GOT_ALL_INGREDIENTS";
const GOT_SINGLE_INGREDIENT = "GOT_SINGLE_INGREDIENT";
const ADD_INGREDIENT = "ADD_INGREDIENT";

/**
 * ACTION CREATORS
 */
const gotAllIngredients = ingredients => ({
  type: GOT_ALL_INGREDIENTS,
  ingredients
});

const gotSingleIngredient = ingredients => ({
  type: GOT_SINGLE_INGREDIENT,
  ingredients
});

const addIngredient = ingredients => ({ type: ADD_INGREDIENT, ingredients });

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

export const getSingleIngredient = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/ingredients/${id}`);
    dispatch(gotSingleIngredient(data));
  } catch (err) {
    console.log(err);
  }
};

export const postIngredient = (quantity, name, recipeId) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/ingredients`, {
        quantity,
        name,
        recipeId
      });
      dispatch(addIngredient(data));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * INITIAL STATE
 */
const initialState = { ingredients: [], singleIngredient: {} };

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_INGREDIENTS:
      return { ...state, ingredients: [...action.ingredients] };
    case GOT_SINGLE_INGREDIENT:
      return { ...state, singleIngredient: { ...action.ingredients } };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredients]
      };
    default:
      return state;
  }
}
