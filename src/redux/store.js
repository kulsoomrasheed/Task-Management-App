import { applyMiddleware, legacy_createStore } from "redux"
import {thunk} from "redux-thunk"
import { reducer } from "./authReducer/reducer"
export const store = legacy_createStore(reducer,applyMiddleware(thunk))