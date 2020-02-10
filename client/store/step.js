import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ALL_STEPS = "GOT_ALL_STEPS";

/**
 * ACTION CREATORS
 */
const gotAllSteps = steps => ({
  type: GOT_ALL_STEPS,
  steps
});

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
    default:
      return state;
  }
}
