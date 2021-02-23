import { combineReducers } from "redux";
import { imageReducer } from "./image/reducers";

const rootReducer = combineReducers({
  image: imageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
