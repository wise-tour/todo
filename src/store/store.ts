import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
 // import thunk from "redux-thunk";
// import { middleware } from "./middleware";

const store: any = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
