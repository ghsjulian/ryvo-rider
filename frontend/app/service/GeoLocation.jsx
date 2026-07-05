import { useEffect } from "react";
import { Geolocation } from "@capacitor/geolocation";
import useMapState from "../store/useMapState"


export default function LocationService() {
  const {setLocation} = useMapState()
  useEffect(() => {
    let stopped = false;

    async function updateLocation() {
      try {
        const pos = await Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });

        if (stopped) return;

        setLocation(pos)
        // Update Zustand
        // Send through Socket.IO
        // Update marker
      } catch (err) {
        console.error("[!] ERROR WHILE FETCH LOCATION : ",err);
      }
    }

    updateLocation();

    const timer = setInterval(updateLocation, 2000);

    return () => {
      stopped = true;
      clearInterval(timer);
    };
  }, []);

  return null;
}