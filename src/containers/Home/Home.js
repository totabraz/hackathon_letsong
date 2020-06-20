import React, { useEffect } from "react";
import classes from "./Home.module.scss";

const Home = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<div className="col-md-7 p-lg-5 mx-auto my-5">
					<figure className={classes.Logo}>
						<img src="/hackathon_letsong/images/logo.png" alt="" />
					</figure>
					<p className="display-4 font-weight-normal ">
						<small>
							<em>"Em busca de conexões para um mundo melhor"</em>
						</small>
					</p>
				</div>
				{/* <div className="product-device box-shadow d-none d-md-block"></div>
				<div className="product-device product-device-2 box-shadow d-none d-md-block"></div> */}
			</div>
			<div className="row">
				<div className="col-md-4 my-md-3 pl-md-3">
					<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden homeCards">
						<div className="my-3 p-3">
							<h2 className="display-5">Missão</h2>
						</div>
						<p className="lead info-mb">
							Conectar empresas e ONG’s contribuindo para redução
							das desigualdades.
						</p>
					</div>
				</div>
				<div className="col-md-4 my-md-3 pl-md-3">
					<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden homeCards">
						<div className="my-3 p-3">
							<h2 className="display-5">Visão</h2>
							<p className="lead info-mb">
								Ser referência em validação e visibilidade de
								ONG’s a nível nacional e engajar empresas na
								construção de uma sociedade mais justa.
							</p>
						</div>
					</div>
				</div>

				<div className="col-md-4 my-md-3 pl-md-3">
					<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden homeCards">
						<div className="my-3 p-3">
							<h2 className="display-5">Valores</h2>
						</div>
						<ul className=" info-mb">
							<li>
								<p className="lead">Transparência</p>
							</li>
							<li>
								<p className="lead">Justiça social</p>
							</li>
							<li>
								<p className="lead">
									Simplicidade nas relações
								</p>
							</li>
							<li>
								<p className="lead">Sustentabilidade</p>
							</li>
							<li>
								<p className="lead">
									Responsabilidade socioeconômica
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
