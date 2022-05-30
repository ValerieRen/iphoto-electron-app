import { combineReducers } from "redux";
import { imageReducer } from "./image/reducers";

const rootReducer = combineReducers({
  image: imageReducer,
});

export default rootReducer;
