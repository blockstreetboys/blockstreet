import { LOAD_SPACEMAN } from '../actions/module_actions';

const modulesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPACEMAN:
      return Object.merge({}, state, {"spaceman": action.data});
    default:
      return state;
  }
};

export default modulesReducer;
