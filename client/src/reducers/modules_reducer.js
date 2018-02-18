import { UPDATE_CODE } from '../actions/module_actions';
import { merge } from 'lodash';
import spacemanData from '../modules/spaceman/config';

const defaultState = {
  spaceman: spacemanData
};

const modulesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_CODE:
      const newArr = state.spaceman.stages.slice();
      newArr[action.activeStage] = merge({}, newArr[action.activeStage], {code: action.code});
      return merge({}, state, {"spaceman": {"stages": newArr}});
    default:
      return state;
  }
};

export default modulesReducer;
