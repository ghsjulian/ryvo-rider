// src/components/map/MapEngine.jsx
import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from "./Header";
import FooterButton from "./FooterButton";
import MapIntialaizer from "../utils/MapIntialaizer";
import MyCurrentLocation from "../utils/MyCurrentLocation";
import ClickHandler from "../utils/ClickHandler";
import DirectionLayer from "../utils/DirectionLayer";
import ArrowLayer from "../utils/ArrowLayer";
import TripInfo from "../utils/TripInfo";
import useMapState from "../store/useMapState";

export default function Map() {
	const {map, myLocation,startLocationTracking,currentLocation, BANGLADESH_CENTER, BANGLADESH_BOUNDS } =
		useMapState();
	
	useEffect(() => {
		myLocation()
	}, [map]);

useEffect(() => {
    startLocationTracking();

    return () => {
        useMapState.getState().stopLocationTracking();
    };
}, []);

//	console.log("[+] Your Current Position  :  ", currentLocation);
	
	return (
		<>
			<Header />
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
					width: "100vw",
					height: "100vh"
				}}
			>
				<TileLayer
					style={{ zIndex: "90" }}
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapIntialaizer />
				<ClickHandler />
				<DirectionLayer />
				<ArrowLayer />
				<MyCurrentLocation />
			</MapContainer>
			<FooterButton />
			<TripInfo/>
		</>
	);
}
