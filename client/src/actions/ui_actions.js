export const SHOW_DEV_SIDEBAR = "SHOW_DEV_SIDEBAR";
export const HIDE_DEV_SIDEBAR = "HIDE_DEV_SIDEBAR";
export const SWITCH_TAB = "SWITCH_TAB";
export const CHANGE_STAGE = "CHANGE_STAGE";
export const SHOW_SOLUTION = 'SHOW_SOLUTION';


export const showDevSidebar = () => {
  return {
    type: SHOW_DEV_SIDEBAR
  };
};

export const hideDevSidebar = () => {
  return {
    type: HIDE_DEV_SIDEBAR
  };
};

export const changeStage = (stageNumber) => {
  return {
    type: CHANGE_STAGE,
    stageNumber
  };
};

export const switchTab = (tabName) => {
  return ({
    type: SWITCH_TAB,
    tabName
  });
};

export const showSolution = () => {
  return({
    type: SHOW_SOLUTION
  });
};
