import productReducer from "./ProductReducer";
import customerReducer from "./CustomerReducer";
import userReducer from './UserReducer';
import loginReducer from './LoginReducer';
import orderReducer from './OrderReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fakeproducts: productReducer,
  fakecustomers: customerReducer,
  fakeusers: userReducer,
  fakeorders: orderReducer,
  login: loginReducer,
});

export default rootReducer;