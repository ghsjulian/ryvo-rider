import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useMapState from "../store/useMapState";
import TrackLocation from "../service/TrackLocation" 
import MapIntialaizer from "../utils/MapIntialaizer";
import MyCurrentLocation from "../utils/MyCurrentLocation";


const MainMap = () => {
	const {
		map,
		myLocation,
		startLocationTracking,
		currentLocation,
		BANGLADESH_CENTER,
		BANGLADESH_BOUNDS
	} = useMapState();

	return (
		<>
			<MapContainer
				center={BANGLADESH_CENTER}
				zoom={8}
				minZoom={7}
				maxZoom={19}
				maxBounds={BANGLADESH_BOUNDS}
				maxBoundsViscosity={1}
				scrollWheelZoom={true}
				doubleClickZoom={true}
				touchZoom={true}
				dragging={true}
				zoomAnimation={true}
				fadeAnimation={true}
				markerZoomAnimation={true}
				inertia={true}
				worldCopyJump={false}
				zoomControl={false}
				attributionControl={false}
				style={{
					marginTop: "55px",
					width: "100vw",
					height: "calc(100vh - 55px)",
					zIndex: "50"
				}}
			>
				<TileLayer
					style={{ zIndex: "50" }}
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapIntialaizer />
				<TrackLocation/>
				<MyCurrentLocation/>
			</MapContainer>
		</>
	);
};

export default MainMap;
