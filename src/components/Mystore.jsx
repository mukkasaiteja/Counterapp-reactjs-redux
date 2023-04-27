import { applyMiddleware, legacy_createStore } from "redux";
import red from "./Red";
import logger from "redux-logger";

const store=legacy_createStore(red,applyMiddleware(logger));
 
export default store;