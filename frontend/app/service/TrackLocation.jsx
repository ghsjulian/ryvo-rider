import { useEffect } from "react";
import { Geolocation } from "@capacitor/geolocation";
import useMapState from "../store/useMapState";


const TrackLocation = () => {
    const { setLocation } = useMapState();
    
	useEffect(() => {
		let watchId = null;

		const startTracking = async () => {
			try {
				// Check current permission
				let permissions = await Geolocation.checkPermissions();

				// Request permission if needed
				if (permissions.location !== "granted") {
					permissions = await Geolocation.requestPermissions();

					if (permissions.location !== "granted") {
						console.log("Location permission denied");
						return;
					}
				}

				// Start watching location
				watchId = await Geolocation.watchPosition(
					{
						enableHighAccuracy: true,
						timeout: 10000,
						maximumAge: 0,
					},
					(position, err) => {
						if (err) {
							console.error(err);
							return;
						}

						if (!position) return;

						const location = {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
							accuracy: position.coords.accuracy,
							speed: position.coords.speed,
							heading: position.coords.heading,
						};
						setLocation(location)
						console.log(location);
						
						// TODO:
						// socket.emit("driver-location", location);
						// or
						// axios.post("/api/location", location);
					}
				);
			} catch (error) {
				console.error(error);
			}
		};

		startTracking();

		return () => {
			if (watchId) {
				Geolocation.clearWatch({ id: watchId });
			}
		};
	}, []);

	return null;
};

export default TrackLocation;