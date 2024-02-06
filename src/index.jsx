import React, { Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import "./assets/icons/remixicon.css";
import "./assets/less/yoda-theme.less";

import App from "./App";
import { persistor, store } from "./redux/store";

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
