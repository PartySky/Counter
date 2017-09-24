
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
          return state + 1;

        case DECREMENT:
          return state - 1;

        case RESET:
          return 0;

        default:
            return state;
    }
}


export function increment(){
  return {
    type: INCREMENT
  };
}

export function decrement(){
  return {
    type: DECREMENT
  };

}

export function reset(){
  return {
    type: RESET
  };
}