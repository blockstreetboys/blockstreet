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

const modulesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPACEMAN:
      return merge({}, state, {"spaceman": action.data});
    case UPDATE_CODE:
      debugger
      return merge({}, state, {"spaceman": action.code });
    default:
      return state;
  }
};

export default modulesReducer;
