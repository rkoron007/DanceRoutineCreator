import { RECEIVE_USER, LOGOUT_CURRENT_USER } from "../actions/sessionActions";

const _nullCurrentUser = {
  id: null,
};

const sessionReducer = (state = _nullCurrentUser, action) => {
  // don't mutate state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return _nullCurrentUser;
    default:
      return state;
  }
};

export default sessionReducer;
