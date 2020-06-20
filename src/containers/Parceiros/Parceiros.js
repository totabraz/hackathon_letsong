import React, { useState, useEffect } from "react";
import { simplestText } from "../../helpers/helpers";

const Parceiros = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const initial_parceiros = [
		{
			index: "1",
			name: "Sebrae",
			img: "/hackathon_letsong/images/parcerios/sebrae.png",
			paragraph: "Parcerio LET'S ONG!",
		},
		{
			index: "2",
			name: "SocialHack",
			img: "/hackathon_letsong/images/parcerios/socialhack.png",
			paragraph: "Parcerio LET'S ONG!",
		},
		{
			index: "3",
			name: "Startupdays",
			img: "/hackathon_letsong/images/parcerios/startupdays.png",
			paragraph: "Parcerio LET'S ONG!",
		},
		{
			index: "4",
			name: "RedBull",
			img: "/hackathon_letsong/images/parcerios/redbull.png",
			paragraph: "Parcerio LET'S ONG!",
		},
	];
	const [parceiros, setParceiros] = useState(initial_parceiros);

	const _content = [];
	let reverse = true;
	for (let index = 0; index < parceiros.length; index = index + 2) {
		const ongA = (
			<div
				className={
					" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden " +
					(reverse ? "bg-light" : "bg-white")
				}
			>
				<div className="my-3 p-3">
					<h2 className="display-5">{parceiros[index].name}</h2>
					<p className="lead">{parceiros[index].paragraph}</p>
				</div>
				<div
					className={
						" box-shadow mx-auto " +
						(reverse ? "bg-white" : "bg-light")
					}
				>
					<figure>
						<img src={parceiros[index].img} alt="" />
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
		if (parceiros[index + 1])
			ongB = (
				<div
					className={
						" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden " +
						(reverse ? "bg-white" : "bg-light")
					}
				>
					<div className="my-3 p-3">
						<h2 className="display-5">
							{parceiros[index + 1].name}
						</h2>
						<p className="lead">{parceiros[index + 1].paragraph}</p>
					</div>
					<div
						className={
							" box-shadow mx-auto " +
							(reverse ? "bg-light" : "bg-white")
						}
					>
						<figure>
							<img src={parceiros[index + 1].img} alt="" />
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

	const filterParceiros = (name = "") => {
		let tempParceiros = initial_parceiros;

		if (name !== "") {
			tempParceiros = initial_parceiros.filter((parceiro) => {
				return simplestText(parceiro.name).includes(simplestText(name));
			});
		}
		setParceiros(tempParceiros);
	};

	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-">
				<div className="col-md-7 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">
						PARCEIROS DAS ONGs
					</h1>
					<p className="lead font-weight-normal">
						Verifique se sua empresa realmente ajuda o mundo ser um
						lugar melhor
					</p>
					<input
						type="text"
						placeholder={"Pesquisar Parceiro"}
						onChange={(event) =>
							filterParceiros(event.target.value)
						}
					/>
				</div>
			</div>
			{_content}
		</div>
	);
};
export default Parceiros;
