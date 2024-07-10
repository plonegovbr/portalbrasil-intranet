import { SET_ACESSIBILIDADE } from '../../constants/ActionTypes';

export function setAcessibilidade(contraste, fonte) {
  return {
    type: SET_ACESSIBILIDADE,
    ...Object.assign({}, { contraste: contraste, fonte: fonte }),
  };
}
