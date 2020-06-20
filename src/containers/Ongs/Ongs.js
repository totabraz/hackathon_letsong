import React from "react";

const Ongs = (props) => {
	const ongs = [
		{
			index: "1",
			name: "Glenda",
			img: "/images/ongs/letsong.png",
			paragraph: "Clifford Cooke",
		},
		{
			index: "2",
			name: "Cheryl",
			img: "/images/ongs/letsong.png",
			paragraph: "Amanda Morgan",
		},
		{
			index: "3",
			name: "Tamara",
			img: "/images/ongs/letsong.png",
			paragraph: "Katharine Chase",
		},
		{
			index: "4",
			name: "Katie",
			img: "/images/ongs/letsong.png",
			paragraph: "Don Berman",
		},
		{
			index: "5",
			name: "Marshall",
			img: "/images/ongs/letsong.png",
			paragraph: "Judith Schultz",
		},
		{
			index: "6",
			name: "Kurt",
			img: "/images/ongs/letsong.png",
			paragraph: "Jonathan Hinson",
		},
		{
			index: "7",
			name: "Sue",
			img: "/images/ongs/letsong.png",
			paragraph: "Katie Watts",
		},
		{
			index: "8",
			name: "Bruce",
			img: "/images/ongs/letsong.png",
			paragraph: "Curtis Roy",
		},
		{
			index: "9",
			name: "Lucille",
			img: "/images/ongs/letsong.png",
			paragraph: "Bob Gallagher",
		},
		{
			index: "10",
			name: "Chris",
			img: "/images/ongs/letsong.png",
			paragraph: "Shelley Hill",
		},
	];

	const _content = [];
	for (let index = 0; index < ongs.length; index = index + 2) {
		const ongA = (
			<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
				<div className="my-3 p-3">
					<h2 className="display-5">{ongs[index].name}</h2>
					<p className="lead">{ongs[index].paragraph}</p>
				</div>
				<div className="bg-white box-shadow mx-auto">
					<figure>
						<img src={ongs[index].img} alt="" />
					</figure>
				</div>
			</div>
		);
		let ongB = (
			<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
				{ongs[index + 1] ? (
					<>
						<div className="my-3 p-3">
							<h2 className="display-5">
								{ongs[index + 1].name}
							</h2>
							<p className="lead">{ongs[index + 1].paragraph}</p>
						</div>
						<div className="bg-white box-shadow mx-auto">
							<figure>
								<img src={ongs[index + 1].img} alt="" />
							</figure>
						</div>
					</>
				) : null}
			</div>
		);
		_content.push(
			<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
				{ongA}
				{ongB}
			</div>
		);
	}

	return (
		<div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">
						ONG'S PARECEIRAS
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
export default Ongs;
