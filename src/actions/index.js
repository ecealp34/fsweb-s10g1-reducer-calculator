export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CE = "CE Clear Display"
export const MEMORY_PLUS = "MEMORY_PLUS hafızaya al."
export const MEMORY_RECORD = "MEMORY_RECORD hafızadaki datayı ekrandakiyle toplar."
export const MEMORY_CLEAR = "MEMORY_CLEAR hafızayı temizle."


export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: Number(number) });
}

export const changeOperation = (operation) => {
  return ({ type: CHANGE_OPERATION, payload: operation });
}
