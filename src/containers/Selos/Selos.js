import React, { useState, useEffect } from "react";
import { simplestText } from "../../helpers/helpers";

const Selos = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const initial_selos = [
		{
			index: "1",
			name: "Selo Vida",
			img: "/hackathon_letsong/images/selos/1.png",
			paragraph: "Abrace essa causa",
		},
		{
			index: "2",
			name: "Selo Amigo",
			img: "/hackathon_letsong/images/selos/2.png",
			paragraph: "Abrace essa causa",
		},
		{
			index: "3",
			name: "Selo Terra",
			img: "/hackathon_letsong/images/selos/3.png",
			paragraph: "Abrace essa causa",
		},
	];
	const [selos, setSelos] = useState(initial_selos);

	const _content = [];
	let reverse = true;
	for (let index = 0; index < selos.length; index = index + 2) {
		const ongA = (
			<div
				className={
					" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden " +
					(reverse ? "bg-light" : "bg-white")
				}
			>
				<div className="my-3 p-3">
					<h2 className="display-5">{selos[index].name}</h2>
					<p className="lead">{selos[index].paragraph}</p>
				</div>
				<div
					className={
						" box-shadow mx-auto " +
						(reverse ? "bg-white" : "bg-light")
					}
				>
					<figure>
						<img src={selos[index].img} alt="" />
					</figure>
				</div>
			</div>
		);
		let ongB = (
			<div
				className={
					" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden "
				}
			>
				<></>
			</div>
		);
		if (selos[index + 1])
			ongB = (
				<div
					className={
						" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden " +
						(reverse ? "bg-white" : "bg-light")
					}
				>
					<div className="my-3 p-3">
						<h2 className="display-5">{selos[index + 1].name}</h2>
						<p className="lead">{selos[index + 1].paragraph}</p>
					</div>
					<div
						className={
							" box-shadow mx-auto " +
							(reverse ? "bg-light" : "bg-white")
						}
					>
						<figure>
							<img src={selos[index + 1].img} alt="" />
						</figure>
					</div>
				</div>
			);
		_content.push(
			<div
				key={index}
				className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"
			>
				{ongA}
				{ongB}
			</div>
		);
		reverse = !reverse;
	}

	const filterSelos = (name = "") => {
		let tempSelos = initial_selos;

		if (name !== "") {
			tempSelos = initial_selos.filter((parceiro) => {
				return simplestText(parceiro.name).includes(simplestText(name));
			});
		}
		setSelos(tempSelos);
	};

	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-">
				<div className="col-md-7 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">
						NOSSOS SELOS
					</h1>
					<p className="lead font-weight-normal">
						<strong>Aplique nossos selos!</strong> Mostre para o
						mundo o quanto você ou sua marca se importam com o mundo
						ao seu redor
					</p>
					<input
						type="text"
						placeholder={"Nome do Parceiro"}
						onChange={(event) => filterSelos(event.target.value)}
					/>
				</div>
			</div>
			{_content}
		</div>
	);
};
export default Selos;
