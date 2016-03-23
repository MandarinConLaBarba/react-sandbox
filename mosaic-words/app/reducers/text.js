import {fromJS} from 'immutable'

const text = (state = '', action) => {
  switch (action.type) {
    case 'ADD_CHAR':
      return state + action.char;
    default:
      return state
  }
}

export default text
