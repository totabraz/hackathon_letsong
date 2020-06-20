import React from "react";

const Parceiros = (props) => {
	const pareceiros = [
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

	const _content = [];
	for (let index = 0; index < pareceiros.length; index = index + 2) {
		const ongA = (
			<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
				<div className="my-3 p-3">
					<h2 className="display-5">{pareceiros[index].name}</h2>
					<p className="lead">{pareceiros[index].paragraph}</p>
				</div>
				<div className="bg-white box-shadow mx-auto">
					<figure>
						<img src={pareceiros[index].img} alt="" />
					</figure>
				</div>
			</div>
		);
		let ongB = null;
		if (pareceiros[index + 1])
			ongB = (
				<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
					<div className="my-3 p-3">
						<h2 className="display-5">
							{pareceiros[index + 1].name}
						</h2>
						<p className="lead">
							{pareceiros[index + 1].paragraph}
						</p>
					</div>
					<div className="bg-white box-shadow mx-auto">
						<figure>
							<img src={pareceiros[index + 1].img} alt="" />
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
	}

	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">
						EMPRESAS PARECEIRAS
					</h1>
					<p className="lead font-weight-normal">
						And an even wittier subheading to boot. Jumpstart your
						marketing efforts with this example based on Apple's
						marketing pages.
					</p>
				</div>
			</div>
			{_content}
		</div>
	);
};
export default Parceiros;
