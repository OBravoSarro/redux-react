import { createStore } from "redux";
import rootReducer from "../root";
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(rootReducer, composeWithDevTools());