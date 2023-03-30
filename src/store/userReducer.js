const defaultState = {
  users: [],
};

export const FETCH_USER = "FETCH_USER";
export const ASYNC_FETCH_USER = "ASYNC_FETCH_USER";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};

export const fetchUserAction = (payload) => ({
  type: FETCH_USER,
  payload,
});

export const asyncFetchUserAction = (payload) => ({
  type: ASYNC_FETCH_USER,
  payload,
});
