import React from "react";
import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Ongs from "./containers/Ongs/Ongs";
import Parceiros from "./containers/Parceiros/Parceiros";
import Selos from "./containers/Selos/Selos";
import Validador from "./containers/Validador/Validador";

let _routes = (
	<Switch>
		<Route path={"/hackathon_letsong/sobre"} exact component={Home} />
		<Route
			path={"/hackathon_letsong/parceiros"}
			exact
			component={Parceiros}
		/>
		<Route path={"/hackathon_letsong/ongs"} exact component={Ongs} />
		<Route path={"/hackathon_letsong/selos"} exact component={Selos} />
		<Route
			path={"/hackathon_letsong/validador"}
			exact
			component={Validador}
		/>
		<Route path={"/hackathon_letsong/home"} exact component={Home} />
		<Redirect to={"/hackathon_letsong/home"} />
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
