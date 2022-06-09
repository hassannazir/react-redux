import { combineReducers } from "redux";
import cakeReducer from "./cake/reducers";
import icecreamReducer from "./icecream/reducers";

export default combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
