import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/main_reducers";
import PromiseMW from "redux-promise";

const create_store_with_middleware = applyMiddleware(PromiseMW)(createStore);
const store = create_store_with_middleware(rootReducer);
console.log(store.getState());
export default store;
