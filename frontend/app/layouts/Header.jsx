import React from "react";

const Header = () => {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				height: "55px",
				zIndex: 1000,
				background: "#ffffff",
				display: "flex",
				alignItems: "center",
				padding: "0 10px",
				boxShadow: "0 2px 10px rgba(0,0,0,.15)"
			}}
		>
			<h3>Taxi Zone</h3>
		</div>
	);
};

export default Header;
