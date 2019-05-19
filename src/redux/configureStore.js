import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // Adding support for dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      //applyMiddleware(thunk, reduxImmutableStateInvariant()), // Indicates if the state is being mutated
      applyMiddleware(thunk), // Indicates if the state is being mutated
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f // Add Redux DevTools
    )
  );
}
