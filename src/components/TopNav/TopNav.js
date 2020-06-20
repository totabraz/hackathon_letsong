import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";

const TopNav = (props) => {
	return (
		<nav className="site-header sticky-top py-1">
			<div className="container d-flex flex-column flex-md-row justify-content-between">
				<NavLink className="py-2  d-md-inline-block" to={"/home"}>
					LET'S ONG
				</NavLink>
				<NavLink className="py-2  d-md-inline-block" to={"/parceiros"}>
					PARCEIROS
				</NavLink>
				<NavLink className="py-2  d-md-inline-block" to={"/ongs"}>
					ONGS
				</NavLink>
				<NavLink className="py-2  d-md-inline-block" to={"/selos"}>
					SELOS
				</NavLink>
				<NavLink className="py-2  d-md-inline-block" to={"/validador"}>
					VALIDAR PARCEIRO
				</NavLink>
				<NavLink className="py-2  d-md-inline-block" to={"/contato"}>
					CONTATO
				</NavLink>
			</div>
		</nav>
	);
};
export default TopNav;
