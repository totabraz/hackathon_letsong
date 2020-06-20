import React from "react";
import classes from "./Layout.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import Footer from "./Footer/Footer";

const Layout = (props) => {
	const ref = React.createRef();

	return (
		<div>
			<div className={classes.Layout}>
				<TopNav toRef={ref} />
				<div className={classes.LayoutBody}>
					<div className={"container-fluid " + classes.Page}>
						<div className={classes.HeaderCorrectio} />
						{props.children}
					</div>
				</div>
			</div>
			<Footer ref={ref} />
		</div>
	);
};

export default Layout;
