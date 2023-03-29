const defaultState = {
  customer: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";
const MANY_CUSTOMER = "MANY_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MANY_CUSTOMER:
      return { ...state, customer: [...state.customer, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customer: [...state.customer, action.payload] };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customer: state.customer.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({
  type: DELETE_CUSTOMER,
  payload,
});

export const getManyCustomersAction = (payload) => ({
  type: MANY_CUSTOMER,
  payload,
});
