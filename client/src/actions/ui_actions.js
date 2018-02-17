export const SHOW_DEV_SIDEBAR = "SHOW_DEV_SIDEBAR";
export const HIDE_DEV_SIDEBAR = "HIDE_DEV_SIDEBAR";
export const CHANGE_STAGE = "CHANGE_STAGE";


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
