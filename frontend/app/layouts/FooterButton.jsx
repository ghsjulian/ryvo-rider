import React from 'react'
import useMapState from "../store/useMapState";

const FooterButton = () => {
    const { myLocation } = useMapState();

  return (
		<button
		onClick={myLocation}
			style={{
				position: "absolute",
				right: 15,
				bottom: 20,
				zIndex: 100000,
				width: 50,
				height: 50,
				borderRadius: "50%",
				border: "none",
				background: "#fff",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				boxShadow: "0 5px 13px rgba(0,0,0,.35)"
			}}
		>
			<img
				src="/icons/target.png"
				width={35}
				height={35}
				alt="Current Location"
			/>
		</button>
	);
}

export default FooterButton






