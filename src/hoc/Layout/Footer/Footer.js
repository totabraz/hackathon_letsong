import React from "react";

const footer = (props) => {
	// return <footer className={classes.Footer}>{props.children}</footer>;
	return (
		<footer className="container py-5">
			<div className="row">
				<div className="col-12">
					<h5>Features</h5>
				</div>
				<div className="col-6 col-md">
					<h5>Features</h5>
					<ul className="list-unstyled text-small">
						<li>
							<p className="text-muted">Cool stuff</p>
						</li>
						<li>
							<p className="text-muted">Random feature</p>
						</li>
						<li>
							<p className="text-muted">Team feature</p>
						</li>
						<li>
							<p className="text-muted">Stuff for developers</p>
						</li>
						<li>
							<p className="text-muted">Another one</p>
						</li>
						<li>
							<p className="text-muted">Last time</p>
						</li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Resources</h5>
					<ul className="list-unstyled text-small">
						<li>
							<p className="text-muted">Resource</p>
						</li>
						<li>
							<p className="text-muted">Resource name</p>
						</li>
						<li>
							<p className="text-muted">Another resource</p>
						</li>
						<li>
							<p className="text-muted">Final resource</p>
						</li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Resources</h5>
					<ul className="list-unstyled text-small">
						<li>
							<p className="text-muted">Business</p>
						</li>
						<li>
							<p className="text-muted">Education</p>
						</li>
						<li>
							<p className="text-muted">Government</p>
						</li>
						<li>
							<p className="text-muted">Gaming</p>
						</li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>About</h5>
					<ul className="list-unstyled text-small">
						<li>
							<p className="text-muted">Team</p>
						</li>
						<li>
							<p className="text-muted">Locations</p>
						</li>
						<li>
							<p className="text-muted">Privacy</p>
						</li>
						<li>
							<p className="text-muted">Terms</p>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default footer;
