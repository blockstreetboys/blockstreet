export const SHOW_DEV_SIDEBAR = "SHOW_DEV_SIDEBAR";
export const HIDE_DEV_SIDEBAR = "HIDE_DEV_SIDEBAR";


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
