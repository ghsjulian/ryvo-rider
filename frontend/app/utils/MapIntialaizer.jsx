import { useEffect } from "react";
import { useMap } from "react-leaflet";
import useMapState from "../store/useMapState";

export default function MapIntialaizer() {
    const map = useMap();
    const setMap = useMapState((state) => state.setMap);

    useEffect(() => {
        setMap(map);
        return () => {
            setMap(null);
        };
    }, [map, setMap]);

    return null;
}