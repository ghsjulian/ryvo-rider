import { useEffect, useState } from "react";
import { Polyline } from "react-leaflet";
import axios from "axios";
import useMapState from "../store/useMapState";

const OSRM = "http://2.25.206.16:5000";

export default function DirectionLayer() {
    const {
        currentLocation,
        destination,
        setRoute,
        setTripInfo
    } = useMapState();

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        if (!currentLocation || !destination) return;

        const loadRoute = async () => {
            try {
                const url =
                    `${OSRM}/route/v1/driving/` +
                    `${currentLocation.lng},${currentLocation.lat};` +
                    `${destination.lng},${destination.lat}` +
                    `?overview=full&geometries=geojson&steps=true`;

                const { data } = await axios.get(url);

                if (!data.routes.length) return;

                const route = data.routes[0];

                const coords = route.geometry.coordinates.map(
                    ([lng, lat]) => [lat, lng]
                );

                setPositions(coords);

                setRoute(coords);

                setTripInfo({
                    distance: route.distance,
                    duration: route.duration
                });
            } catch (err) {
                console.error(err);
            }
        };

        loadRoute();

    }, [currentLocation, destination]);

    if (!positions.length) return null;

    return (
        <Polyline
            positions={positions}
            pathOptions={{
                color: "#1976D2",
                weight: 6,
                opacity: 0.95,
                lineCap: "round",
                lineJoin: "round"
            }}
        />
    );
}