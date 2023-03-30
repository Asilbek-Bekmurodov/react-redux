import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrementAction,
  asyncIncrementAction,
  decrementAction,
  incrementAction,
} from "./store/count";
import { asyncFetchUserAction } from "./store/userReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);

  return (
    <div className="App">
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => dispatch(asyncIncrementAction())}>
          Increment
        </button>
        <div style={{ fontSize: "50px", marginBottom: "20px" }}>{count}</div>
        <button onClick={() => dispatch(asyncDecrementAction())}>
          Decrement
        </button>
        <button onClick={() => dispatch(asyncFetchUserAction())}>
          Many users
        </button>
      </div>
      <div>
        {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>
    </div>
  );
}

export default App;
