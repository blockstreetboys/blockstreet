import { UPDATE_CODE, SHOW_SOLUTION } from '../actions/module_actions';
import { merge } from 'lodash';
import spacemanData from '../modules/spaceman/config';

const defaultState = {
  spaceman: spacemanData
};

const modulesReducer = (state = defaultState, action) => {
  const { stages } = state.spaceman;
  const currentStage = stages[action.activeStage];
  switch (action.type) {
    case SHOW_SOLUTION:
      return {
        ...state,
        spaceman: {
          ...state.spaceman,
          stages: [
              ...stages.slice(0, action.activeStage),
              { ...currentStage, code: currentStage.referenceSolution },
              ...stages.slice(action.activeStage + 1)
          ]
        }
      }
    case UPDATE_CODE:
      return {
        ...state,
        spaceman: {
          ...state.spaceman,
          stages: [
              ...stages.slice(0, action.activeStage),
              { ...currentStage, code: action.code },
              ...stages.slice(action.activeStage + 1)
          ],
        }
      }
    default:
      return state;
  }
};

export default modulesReducer;
