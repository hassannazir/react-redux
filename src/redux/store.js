import { createStore } from "redux";
import reducer from "./cake/reducers";
const store = createStore(reducer);

export default store;
