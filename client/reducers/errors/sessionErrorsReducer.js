import {
  RECEIVE_USER,
  RECEIVE_SESSION_ERRORS,
} from "../../actions/sessionActions";

const sessionReducer = (state = [], action) => {
  // don't mutate state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors.message.split(",");
    default:
      return state;
  }
};

export default sessionReducer;
