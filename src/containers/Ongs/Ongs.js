import React from "react";

const Ongs = (props) => {
	const ongs = [
		{
			index: "1",
			name: "Casaca de Couro",
			img: "/images/ongs/ong1.png",
			paragraph:
				"A Casaca de Couro se compromete na defesa do bioma unicamente brasileiro; a Caatinga. Nossas atividades se concentram entre o Cariri e o Seridó, difundindo a consciência socioambiental à jovens do ensino fundamental do interior da Paraíba e Rio Grande do Norte.",
		},
		{
			index: "2",
			name: "Chão Frio",
			img: "/images/ongs/ong2.png",
			paragraph:
				"A Chão Frio atua com a população em situação de rua que não tem uma moradia para proteção, nem o acesso a notícias sobre a evolução do Covid-19. É tempo de nos unirmos e mostrarmos que juntos podemos fazer a diferença. Faça parte do movimento, visite o nosso link.",
		},
		{
			index: "3",
			name: "Zona de Afeto",
			img: "/images/ongs/ong3.png",
			paragraph:
				"Fundada em 2004, a Zona de Afeto, como ela é carinhosamente chamada, é uma organização da sociedade civil que atua há 16 anos, com objetivo de gerar transformação social por meio do desenvolvimento integral de crianças e adolescentes da comunidade Redinha, em Curitiba-PR",
		},
		{
			index: "4",
			name: "Cara Nova",
			img: "/images/ongs/ong4.png",
			paragraph:
				"Somos uma instituição que promove a reintegração de pessoas em situação de rua na sociedade. Buscamos ressignificar à vida do público atendido, oferecendo ferramentas para redescobrimento de paixões, resgate da sua autoestima e confiança, desenvolvimento de aprendizados em diferentes capacitações despertando, em cada indivíduo, o sentimento de pertencimento a um grupo, reconhecendo seu papel, deveres e direitos na sociedade",
		},
		{
			index: "5",
			name: "Rede Base",
			img: "/images/ongs/ong5.png",
			paragraph:
				"A Rede Base é uma organização social que atende crianças, adolescentes e mulheres em situação de vulnerabilidade na cidade do Recife. Estamos situados no centro da capital pernambucana – localização estratégica para atender ao nosso público-alvo e fácil acesso para qualquer interessado. Oferecemos diversos cursos e atividades socioeducativas, envolvendo esportes, artes e cultura",
		},
		{
			index: "6",
			name: "Bruta Flor",
			img: "/images/ongs/ong6.png",
			paragraph:
				"Construída em 1997, a Bruta Flor trabalha em conjunto com a Delegacia da Mulher em Uberlândia (MG). Além do levantamento de dados para viabilizar e incentivar políticas públicas de proteção à mulher, atua no atendimento de mulheres em situação de violência e também com a Formação Continuada da equipe de voluntários que torna possível o funcionamento da SOS Mulher",
		},
		{
			index: "7",
			name: "Gente Grande",
			img: "/images/ongs/ong7.png",
			paragraph:
				"Acompanhamos adolescentes e jovens a partir dos 14 anos de idade, em sua transição para a vida adulta, para que possam desenvolver suas habilidades e conhecimentos com visão ao próprio futuro. Uma vida autônoma, empreendedora e participativa, social e politicamente. Participe do Gente Grande!",
		},
		{
			index: "8",
			name: "Prato Solidário",
			img: "/images/ongs/ong8.png",
			paragraph:
				"A atuação da Prato Solidário tem como base a coleta de alimentos frescos de forma segura e seu posterior repasse. Alinhados aos Objetivos do Milênio, os projetos da Prato Solidário contribuem para o combate da fome e da desnutrição, além de melhorar o aproveitamento de alimentos que normalmente seriam desperdiçados na cadeia produtiva",
		},
		{
			index: "9",
			name: "Dias Melhores",
			img: "/images/ongs/ong9.png",
			paragraph:
				"A Dias Melhores tem como missão estruturar uma rede de voluntariado na área da Saúde que realiza atendimentos com foco em Atenção Primária. Nosso objetivo é contribuir com o sistema público de saúde realizando atendimentos humanizados e resolutivos. E conscientizar a população sobre a importância do autocuidado",
		},
		{
			index: "10",
			name: "ACiranda Social",
			img: "/images/ongs/ong1.png",
			paragraph:
				"A Ciranda Social trabalha para que crianças e adolescentes tenham amparo e estrutura durante o tratamento oncológico e de outras doenças não infecciosas, valorizando sempre a vida! Juntos alcançamos melhores resultados, principalmente no que diz respeito ao futuro de nossas crianças, adolescentes e de suas famílias.",
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
