import * as types from './type';

export const addWork = (name, id) => ({
  type: types.ADD_WORK,
  payload: { name, id }
});