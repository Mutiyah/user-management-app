import { createStore } from "redux";
import { userReducer } from "./createUsers/userReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;