import { LOAD_SPACEMAN } from '../actions/module_actions';
import { merge } from 'lodash';

const modulesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPACEMAN:
      return merge({}, state, {"spaceman": action.data});
    default:
      return state;
  }
};

export default modulesReducer;
