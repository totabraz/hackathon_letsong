import React, { useEffect } from "react";

const Home = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<div className="col-md-7 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">LET'S ONG</h1>
					<p className="lead font-weight-normal">
						And an even wittier subheading to boot. Jumpstart your
						marketing efforts with this example based on Apple's
						marketing pages.
					</p>
				</div>
				{/* <div className="product-device box-shadow d-none d-md-block"></div>
				<div className="product-device product-device-2 box-shadow d-none d-md-block"></div> */}
			</div>
			<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
				<div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"></div>
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 p-3">
						<h2 className="display-5">Missão</h2>
					</div>
					<p className="lead info-mb">
						Conectar empresas e ONG’s contribuindo para redução das
						desigualdades.
					</p>
				</div>
			</div>
			<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 p-3">
						<h2 className="display-5">Visão</h2>
						<p className="lead info-mb">
							Ser referência em validação e visibilidade de ONG’s
							a nível nacional e engajar empresas na construção de
							uma sociedade mais justa.
						</p>
					</div>
				</div>
				<div className=" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"></div>
			</div>

			<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
				<div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"></div>
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
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
							<p className="lead">Simplicidade nas relações</p>
						</li>
						<li>
							<p className="lead">
								Gestão eficiente e compartilhada
							</p>
						</li>
						<li>
							<p className="lead">
								Foco em crescimento e resultado
							</p>
						</li>
						<li>
							<p className="lead">
								Sustentabilidade e responsabilidade
								socioeconômica
							</p>
						</li>
					</ul>
				</div>
			</div>

			{/**
			<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 p-3">
						<h2 className="display-5">Another headline</h2>
						<p className="lead">And an even wittier subheading.</p>
					</div>
					<div className="bg-dark box-shadow mx-auto"></div>
				</div>
				<div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
					<div className="my-3 py-3">
						<h2 className="display-5">Another headline</h2>
						<p className="lead">And an even wittier subheading.</p>
					</div>
					<div className="bg-light box-shadow mx-auto"></div>
				</div>
			</div>
			<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 p-3">
						<h2 className="display-5">Another headline</h2>
						<p className="lead">And an even wittier subheading.</p>
					</div>
					<div className="bg-white box-shadow mx-auto">sdsdsdsds</div>
				</div>
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 py-3">
						<h2 className="display-5">Another headline</h2>
						<p className="lead">And an even wittier subheading.</p>
					</div>
					<div className="bg-white box-shadow mx-auto"></div>
				</div>
			</div>
			<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 p-3">
						<h2 className="display-5">Another headline</h2>
						<p className="lead">And an even wittier subheading.</p>
					</div>
					<div className="bg-white box-shadow mx-auto"></div>
				</div>
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 py-3">
						<h2 className="display-5">Another headline</h2>
						<p className="lead">And an even wittier subheading.</p>
					</div>
					<div className="bg-white box-shadow mx-auto"></div>
				</div>
			</div>
	 */}
		</div>
	);
};
export default Home;
