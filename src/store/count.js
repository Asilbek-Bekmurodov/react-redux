const defaultState = {
  count: 0,
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const incrementAction = () => ({ type: INCREMENT });
export const asyncIncrementAction = () => ({ type: ASYNC_INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const asyncDecrementAction = () => ({ type: ASYNC_DECREMENT });
