import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // Adding support for dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) // Indicates if the state is being mutated
  );
}
