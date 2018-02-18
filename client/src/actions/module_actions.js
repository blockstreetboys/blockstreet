import spacemanData from '../modules/spaceman/config';

export const LOAD_SPACEMAN = "LOAD_SPACEMAN";
export const UPDATE_CODE = "UPDATE_CODE";

export const loadSpaceman = () => {
  return {
    type: LOAD_SPACEMAN,
    data: spacemanData
  };
};

export const updateCode = (code, activeStage) => {
  return ({
    type: UPDATE_CODE,
    code,
    activeStage
  });
};
