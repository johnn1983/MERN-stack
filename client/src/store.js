import {applyMiddleware, createStore} from "redux"
import rootReducer from "./reducers/index"
import thunk from "redux-thunk"
export const Store = createStore(rootReducer, applyMiddleware(thunk))