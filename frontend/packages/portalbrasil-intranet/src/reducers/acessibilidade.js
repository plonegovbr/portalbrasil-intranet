import { SET_ACESSIBILIDADE } from '../constants/ActionTypes';

const initialState = {
  contraste: 'd',
  fonte: 'm',
};

export const acessibilidade = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACESSIBILIDADE:
      return action;
    default:
      return state;
  }
};
