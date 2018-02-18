export const UPDATE_CODE = "UPDATE_CODE";

export const updateCode = (code, activeStage) => {
  return ({
    type: UPDATE_CODE,
    code,
    activeStage
  });
};
