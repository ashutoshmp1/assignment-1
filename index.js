import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./app.js";

export const store = createStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <app/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("container")
);