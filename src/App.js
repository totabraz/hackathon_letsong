import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Ongs from "./containers/Ongs/Ongs";
import Parceiros from "./containers/Parceiros/Parceiros";

let _routes = (
	<Switch>
		<Route path={"/sobre"} exact component={Home} />
		<Route path={"/parceiros"} exact component={Parceiros} />
		<Route path={"/ongs"} exact component={Ongs} />
		<Route path={"/selos"} exact component={Home} />
		<Route path={"/validador"} exact component={Home} />
		<Route path={"/contato"} exact component={Home} />
		<Route path={"/home"} exact component={Home} />
		<Redirect to={"/home"} />
	</Switch>
);

function App() {
	return (
		<div className="App">
			<Layout>{_routes}</Layout>
		</div>
	);
}

export default App;
