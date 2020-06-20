import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/product.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const composeEnhancers =
	process.env.NODE_ENV === "development" &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

// Creaing redux store
const store = createStore(composeEnhancers);

const app = (
	<Provider store={store}>
		<BrowserRouter basename="/">
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
