import {
  HIDE_DEV_SIDEBAR,
  SHOW_DEV_SIDEBAR,
  CHANGE_STAGE,
  SWITCH_TAB,
  SHOW_SOLUTION } from '../actions/ui_actions';

const defaultState = {
  showDevSidebar: true,
  activeStage: 0,
  activeTab: "script",
  solutionBoolean: false
};

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case HIDE_DEV_SIDEBAR:
      return Object.assign({}, state, {showDevSidebar: false});
    case SHOW_DEV_SIDEBAR:
      return Object.assign({}, state, {showDevSidebar: true});
    case CHANGE_STAGE:
      return Object.assign({}, state, {activeStage: action.stageNumber});
    case SWITCH_TAB:
      return Object.assign({}, state, {activeTab: action.tabName});
    case SHOW_SOLUTION:
      const bool = !state.solutionBoolean;
      return Object.assign({}, state, {solutionBoolean: bool});
    default:
      return state;
  }
};

export default uiReducer;
