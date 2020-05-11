import { RECEIVE_USER } from "../actions/sessionActions";

const usersReducer = (state = {}, action) => {
  // don't mutate state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
