import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import sagas from "./sagas/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // Adding support for dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f // Add Redux DevTools
    )
  );

  sagaMiddleware.run(sagas);

  return store;
}
