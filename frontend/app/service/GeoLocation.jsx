import { useEffect } from "react";
import { Geolocation } from "@capacitor/geolocation";
import useMapState from "../store/useMapState";

export default function LocationService() {
	const { setLocation } = useMapState();
	useEffect(() => {
		let running = true;
		const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

		async function startTracking() {
			while (running) {
				try {
					const position = await Geolocation.getCurrentPosition({
						enableHighAccuracy: true,
						timeout: 50000
					});
					const location = {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
							accuracy: position.coords.accuracy,
							speed: position.coords.speed,
							heading: position.coords.heading,
						};
						setLocation(location)
					// ==========================
					// Update Zustand
					// useLocationStore.getState().setLocation(location);
					// Send to Socket.IO
					// socket.emit("driver:location", location);
					// Or send to API
					// await axios.post("/api/location", location);
					// ==========================
				} catch (err) {
					console.error("[!] Location Error:", err);
				}
				// Wait 2 seconds before requesting again
				await sleep(2000);
			}
		}
		startTracking();

		return () => {
			running = false;
		};
	}, []);

	return null;
}
