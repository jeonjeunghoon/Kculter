import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import member from "./reducer";

export const rootReducer = combineReducers({
  member
});

const presistConfig = {
  key: "root",
  storage,
  whitelist: ["member"]
};

export default persistReducer(presistConfig, rootReducer);