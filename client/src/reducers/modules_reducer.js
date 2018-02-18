import { LOAD_SPACEMAN, UPDATE_CODE } from '../actions/module_actions';
import { merge } from 'lodash';

const defaultState = {
  spaceman: {
    apiStage: {
      referenceSolution: "",
      testCases: "",
      title: ""
    },
    deploymentStage: {
      preloaded: "",
      referenceSolution: "",
      testCases: "",
      title: ""
    },
    stages: []
  }
};

const modulesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_SPACEMAN:
      return merge({}, state, {"spaceman": action.data});
    case UPDATE_CODE:

      const newArr = state.spaceman.stages.slice();
      newArr[action.activeStage] = merge({}, newArr[action.activeStage], {code: action.code});
      return merge({}, state, {"spaceman": {"stages": newArr}});
    default:
      return state;
  }
};

export default modulesReducer;
