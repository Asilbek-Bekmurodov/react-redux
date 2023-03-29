import { getManyCustomersAction } from "../customerReducer";

export const manyCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(getManyCustomersAction(json)));
  };
};
