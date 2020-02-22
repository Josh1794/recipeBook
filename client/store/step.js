import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ALL_STEPS = "GOT_ALL_STEPS";
const ADD_STEP = "ADD_STEP";

/**
 * ACTION CREATORS
 */
const gotAllSteps = steps => ({
  type: GOT_ALL_STEPS,
  steps
});

const addStep = steps => ({ type: ADD_STEP, steps });

/**
 * THUNK CREATORS
 */
export const getAllSteps = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/steps");
    dispatch(gotAllSteps(data));
  } catch (err) {
    console.error(err);
  }
};

export const postSteps = (stepNum, instruction, recipeId) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/steps`, {
        stepNum,
        instruction,
        recipeId
      });
      dispatch(addStep(data));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * INITIAL STATE
 */
const initialState = { steps: [] };

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_STEPS:
      return { ...state, steps: [...action.steps] };
    case ADD_STEP:
      return {
        ...state,
        steps: [...state.steps, action.steps]
      };
    default:
      return state;
  }
}
