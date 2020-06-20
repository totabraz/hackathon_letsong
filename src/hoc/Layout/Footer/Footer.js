import React from "react";

const footer = React.forwardRef((props, ref) => {
	// return <footer className={classes.Footer}>{props.children}</footer>;
	return (
		<footer ref={ref} id={"#contato"} className="container py-5 ">
			<div className="row">
				<div className="col-12">
					<h4>Faça parte de nossa rede</h4>
					<br />
				</div>
				<div className="col-12 col-sm-6 ">
					<h5>Ser Parseiro</h5>
					<ul className="list-unstyled text-small ">
						<li>
							<p className="text-muted">parceiros@letsong.ong</p>
						</li>
						<li>
							<p className="text-muted">+55 84 0000-0000</p>
						</li>
					</ul>
				</div>
				<div className="col-12 col-sm-6 ">
					<h5>Cadastrar Ong</h5>
					<ul className="list-unstyled text-small ">
						<li>
							<p className="text-muted">ongs@letsong.ong</p>
						</li>
						<li>
							<p className="text-muted">+55 84 0000-1111</p>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
});

export default footer;
