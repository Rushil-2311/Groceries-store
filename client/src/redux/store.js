import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./auth/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "redux/sagas";

// const sagaMiddleware = createSagaMiddleware();

const customMiddleware = store => next => action => {
  // Our middleware
  console.log(`Redux Custom Middleware Log:`, action);
  // call the next function
  next(action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "authSaga"]
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer());

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware( customMiddleware),
    composeEnhancer()
  )
);

// sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

// Where ?

// The way I classify it is when ever state needs to be shared by multiple components or
// multiple pages and we need to persist some data over route changes, all that data should go inside the redux store.

// Curring Function

// let curriedAdd = function(a) {
//   return function(b) {
//     return a + b;
//   };
// };

// let curriedAdd2 = a => b => a + b;

// console.log(curriedAdd(1)(2));
// console.log(curriedAdd2(1)(2));
