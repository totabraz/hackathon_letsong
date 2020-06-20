import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";

const TopNav = ({ toRef }) => {
	return (
		<nav className="site-header sticky-top py-1">
			<div className="container d-flex flex-column flex-md-row justify-content-between">
				<NavLink
					className="py-2  d-md-inline-block LogoNav"
					to={"/hackathon_letsong/home"}
				>
					<figure>
						<img src="/hackathon_letsong/images/icon.png" alt="" />
					</figure>
					LET'S ONG
				</NavLink>
				<NavLink
					className="py-2  d-md-inline-block"
					to={"/hackathon_letsong/parceiros"}
				>
					PARCEIROS
				</NavLink>
				<NavLink
					className="py-2  d-md-inline-block"
					to={"/hackathon_letsong/ongs"}
				>
					ONGS
				</NavLink>
				<NavLink
					className="py-2  d-md-inline-block"
					to={"/hackathon_letsong/selos"}
				>
					SELOS
				</NavLink>
				<button
					tabIndex={0}
					className="py-2  d-md-inline-block"
					onClick={() => {
						console.log("clicked");

						window.scrollTo(0, toRef.current.offsetTop);
					}}
				>
					CONTATO
				</button>
			</div>
		</nav>
	);
};
export default TopNav;
