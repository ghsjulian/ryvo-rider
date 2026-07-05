// src/components/location/LocationService.jsx

import { useEffect } from "react";
import { Geolocation } from "@capacitor/geolocation";

export default function LocationService() {
  useEffect(() => {
    let watchId = null;

    async function startLocation() {
      try {
        // Check current permission
        let permission = await Geolocation.checkPermissions();

        // Request if not granted
        if (
          permission.location !== "granted" &&
          permission.coarseLocation !== "granted"
        ) {
          permission = await Geolocation.requestPermissions();
        }

        if (
          permission.location !== "granted" &&
          permission.coarseLocation !== "granted"
        ) {
          console.log("Location permission denied");
          return;
        }

        // Watch device location
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
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
              speed: position.coords.speed,
              heading: position.coords.heading,
              altitude: position.coords.altitude,
              timestamp: position.timestamp,
            };

            console.log("Current Location:", location);

            // TODO:
            // socket.emit(...)
            // axios.post(...)
            // Zustand store update
          }
        );
      } catch (e) {
        console.error(e);
      }
    }

    startLocation();

    return () => {
      if (watchId) {
        Geolocation.clearWatch({ id: watchId });
      }
    };
  }, []);

  return null;
}
