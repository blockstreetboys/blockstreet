import spacemanData from '../modules/spaceman/config';

export const LOAD_SPACEMAN = "LOAD_SPACEMAN";

export const loadSpaceman = () => {
  return {
    type: LOAD_SPACEMAN,
    data: spacemanData
  };
};
