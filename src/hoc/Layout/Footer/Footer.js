import React from "react";

const footer = (props) => {
	// return <footer className={classes.Footer}>{props.children}</footer>;
	return (
		<footer className="container py-5">
			<div className="row">
				<div className="col-12">
					<h5>Features</h5>
				</div>
				<div className="col-12 col-sm-6">
					<h5>Features</h5>
					<ul className="list-unstyled text-small">
						<li>
							<p className="text-muted" href="#">
								Cool stuff
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Random feature
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Team feature
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Stuff for developers
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Another one
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Last time
							</p>
						</li>
					</ul>
				</div>
				<div className="col-12 col-sm-6">
					<h5>Resources</h5>
					<ul className="list-unstyled text-small">
						<li>
							<p className="text-muted" href="#">
								Resource
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Resource name
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Another resource
							</p>
						</li>
						<li>
							<p className="text-muted" href="#">
								Final resource
							</p>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default footer;
