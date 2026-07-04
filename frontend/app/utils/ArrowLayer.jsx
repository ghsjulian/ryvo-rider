import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-polylinedecorator";
import useMapState from "../store/useMapState";

export default function ArrowLayer() {
    const map = useMap();

    const { route } = useMapState();

    useEffect(() => {
        if (!route.length) return;

        const polyline = L.polyline(route);

        const decorator = L.polylineDecorator(polyline, {
            patterns: [
                {
                    offset: 20,
                    repeat: 40,
                    symbol: L.Symbol.arrowHead({
                        pixelSize: 10,
                        polygon: true,
                        pathOptions: {
                            color: "#1976D2",
                            fillOpacity: 1,
                            weight: 2
                        }
                    })
                }
            ]
        });
        decorator.addTo(map);
        return () => {
            map.removeLayer(decorator);
        };
    }, [route]);

    return null;
}