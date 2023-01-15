import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import messageReducer from "./reducers/message/messageReducer";

const rootReducer = combineReducers({ messageReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
