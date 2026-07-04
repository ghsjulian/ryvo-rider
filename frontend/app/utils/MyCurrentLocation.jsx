import { useEffect, useRef } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import useMapState from "../store/useMapState";

const currentLocationIcon = new L.Icon({
    iconUrl: "/icons/me.png",
    iconSize: [42, 42],
    iconAnchor: [21, 42]
});

export default function MyCurrentLocation() {
    const markerRef = useRef(null);

    const { currentLocation,detectMovement } = useMapState();

    const previous = useRef(null);

    useEffect(() => {
        if (!currentLocation) return;
        if (!markerRef.current) return;

        const marker = markerRef.current;

        // First location
        if (!previous.current) {
            marker.setLatLng([
                currentLocation.lat,
                currentLocation.lng
            ]);

            previous.current = currentLocation;
            return;
        }

        const from = previous.current;
        const to = currentLocation;

        const start = performance.now();
        const duration = 1000;

        function animate(now) {
            const progress = Math.min((now - start) / duration, 1);

            const lat =
                from.lat + (to.lat - from.lat) * progress;

            const lng =
                from.lng + (to.lng - from.lng) * progress;

            marker.setLatLng([lat, lng]);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);

        previous.current = to;

    }, [currentLocation]);

    if (!currentLocation) return null;

 console.log("[+] You Are : ",detectMovement())

    return (
        <Marker
            ref={markerRef}
            position={[
                currentLocation.lat,
                currentLocation.lng
            ]}
            icon={currentLocationIcon}
        />
    );
}