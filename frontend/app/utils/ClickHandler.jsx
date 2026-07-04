import { useState } from "react";
import { useMapEvents, Marker } from "react-leaflet";
import useMapState from "../store/useMapState";
import axios from "axios";

const markerIcon = new L.Icon({
	iconUrl: "/icons/gps.png", // "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
	iconSize: [45, 45],
	iconAnchor: [12, 41]
});

export default function ClickHandler() {
	const [position, setPosition] = useState(null);
	const { setDestination ,setPlace} = useMapState();

	useMapEvents({
		async click(e) {
			const destination = {
				lat: e.latlng.lat,
				lng: e.latlng.lng
			};
			setDestination(destination);
			setPosition([e.latlng.lat, e.latlng.lng]);
			try {
				const { data } = await axios.get(
					"https://nominatim.openstreetmap.org/reverse",
					{
						params: {
							format: "jsonv2",
							lat: e.latlng.lat,
							lon: e.latlng.lng
						},
						headers: {
							Accept: "application/json"
						}
					}
				);
				setPlace(data)
				///	console.log("[+] Click Destination : ", destination);
			} catch (error) {
				console.log(error);
			}
		}
	});

	return position ? <Marker position={position} icon={markerIcon} /> : null;
}
