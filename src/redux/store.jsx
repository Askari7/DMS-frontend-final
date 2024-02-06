import thunk from "redux-thunk";
import createDebounce from "redux-debounced";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware, compose } from "redux";
// import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
//   whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, createDebounce()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
//   {},
  composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
