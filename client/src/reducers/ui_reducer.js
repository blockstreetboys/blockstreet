import {
  HIDE_DEV_SIDEBAR,
  SHOW_DEV_SIDEBAR,
  CHANGE_STAGE,
  SWITCH_TAB } from '../actions/ui_actions';

const defaultState = {
  showDevSidebar: true,
  activeStage: 0,
  activeTab: "script"
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
    default:
      return state;
  }
};

export default uiReducer;
