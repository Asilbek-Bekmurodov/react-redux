import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  getManyCustomersAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { manyCustomers } from "./store/asyncActions/manyCustomers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customer.customer);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "DELETE_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "50px", marginBottom: "20px" }}>{cash}</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => addCash(Number(prompt("cash")))}>
          Add cash
        </button>
        <button onClick={() => getCash(Number(prompt("cash")))}>
          Delete cash
        </button>

        <button onClick={() => addCustomer(prompt("name"))}>Add client</button>
        <button onClick={() => getClient(Number(prompt("cash")))}>
          Delete client
        </button>
        <button onClick={() => dispatch(manyCustomers())}>Many clients</button>
      </div>
      {customer.length > 0 ? (
        <div>
          {customer.map((customer) => (
            <div onClick={() => removeCustomer(customer.id)}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>no customers</div>
      )}
    </div>
  );
}

export default App;
