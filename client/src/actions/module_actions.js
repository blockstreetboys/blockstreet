export const UPDATE_CODE = "UPDATE_CODE";
export const SHOW_SOLUTION = 'SHOW_SOLUTION';

export const updateCode = (code, activeStage) => {
  return ({
    type: UPDATE_CODE,
    code,
    activeStage
  });
};

export const showSolution = (activeStage) => {
  return({
    type: SHOW_SOLUTION,
    activeStage
  });
};
