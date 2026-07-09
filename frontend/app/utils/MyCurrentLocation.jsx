import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import L from "leaflet";
import useMapState from "../store/useMapState";

const currentLocationIcon = new L.Icon({
    iconUrl: "/icons/me.png",
    iconSize: [42, 42],
    iconAnchor: [21, 42],
});

export default function MyCurrentLocation() {
    const map = useMap();

    const {
        currentLocation,
        detectMovement
    } = useMapState();

    useEffect(() => {
        if (!currentLocation) return;

        // Zoom on first location
        if (map.getZoom() < 17) {
            map.flyTo(
                [currentLocation.lat, currentLocation.lng],
                18,
                {
                    animate: true,
                    duration: 1.2,
                }
            );
        } else {
            // Follow the user smoothly
            map.panTo(
                [currentLocation.lat, currentLocation.lng],
                {
                    animate: true,
                    duration: 0.5,
                }
            );
        }
    }, [currentLocation, map]);

    console.log("[+] You Are :", detectMovement());

    if (!currentLocation) return null;

    return (
        <Marker
            position={[
                currentLocation.lat,
                currentLocation.lng,
            ]}
            icon={currentLocationIcon}
        />
    );
}