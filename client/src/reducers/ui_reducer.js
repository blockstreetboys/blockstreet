import { HIDE_DEV_SIDEBAR, SHOW_DEV_SIDEBAR } from '../actions/ui_actions';

const defaultState = {
  showDevSidebar: true
};

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case HIDE_DEV_SIDEBAR:
      return Object.assign({}, state, {showDevSidebar: false});
    case SHOW_DEV_SIDEBAR:
      return Object.assign({}, state, {showDevSidebar: true});
    default:
      return state;
  }
};

export default uiReducer;
