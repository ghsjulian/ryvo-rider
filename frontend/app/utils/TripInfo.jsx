import { useEffect } from "react";
import useMapState from "../store/useMapState";

export default function TripInfo() {
	const { distance, duration, route, destination, place, hideTrip } =
		useMapState();
	if (!route.length || !place) return null;
	//	console.log("Place : ", place);

	return (
		<div
			style={{
				position: "absolute",
				top: 80,
				left: 15,
				zIndex: 9999,
				width: "90%",
				background: "#fff",
				padding: "12px 15px",
				borderRadius: 12,
				boxShadow: "0 8px 20px rgba(0,0,0,.15)"
			}}
		>
			<span
				onClick={hideTrip}
				style={{
					position: "absolute",
					top: "-2px",
					right: "-20px",
					zIndex: 9999,
					width: "50px",
					height: "50px",
					borderRadius: "50%",
					color: "#f6001a",
					cursor: "pointer"
				}}
			>
				<img src="/icons/close.png" width="35" height="35" />
			</span>

			<br />
			<div>
				<span style={{ color: "#047d18" }}>Place Name : </span>
				{place?.display_name}
			</div>
			<br />
			<div>
				<strong>
					<span style={{ color: "#047d18" }}>Distance : </span>
					{(distance / 1000).toFixed(2)} km
				</strong>
			</div>
			<br />
			<div>
				<span style={{ color: "#047d18" }}>Duration : </span>
				{Math.round(duration / 60)} Minutes
			</div>
			<br />
			<div>
				<span style={{ color: "#047d18" }}>Available Riders : </span>7
			</div>
			<br />
			<div>
				<span style={{ color: "#047d18" }}>Nearest Rider : </span>3
			</div>
			<button
				style={{
					outline: "none",
					border: "none",
					padding: ".8rem 1rem",
					marginTop: ".8rem",
					borderRadius: 8,
					color: "#fff",
					background: "#000",
					fontWeight: 800,
					cursor: "pointer"
				}}
			>
				Book A Rider
			</button>
		</div>
	);
}
