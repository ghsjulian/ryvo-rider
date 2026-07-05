// src/store/useMapState.js

import { create } from "zustand";

const useMapState = create((set, get) => ({
	BANGLADESH_CENTER: [23.685, 90.3563],
	BANGLADESH_BOUNDS: [
		[20.55, 88.0],
		[26.75, 92.7]
	],
	watchId: null,
	map: null,
	currentLocation: null,
	pickup: null,
	destination: null,
	place : null,
	driverLocation: null,
	route: [],
	distance: 0,
	duration: 0,
	followUser: true,
	navigationMode: false,
	loadingRoute: false,
	selectedVehicle: null,

	setMap: map => set({ map }),

	// -----------------------
	// Pickup
	// -----------------------
	setPickup: pickup => set({ pickup }),

	// -----------------------
	// Destination
	// -----------------------
	setDestination: destination => set({ destination }),

	// -----------------------
	// Driver Location
	// -----------------------
	setDriverLocation: location => set({ driverLocation: location }),

	// -----------------------
	// Route Coordinates
	// -----------------------
	setRoute: route => set({ route }),
	clearRoute: () => set({ route: [] }),

	// -----------------------
	// Distance & Duration
	// -----------------------
	setTripInfo: ({ distance, duration }) =>
		set({
			distance,
			duration
		}),
	
	setPlace : (data)=>set({place:data}),

	// -----------------------
	// Following User
	// -----------------------
	setFollowUser: value => set({ followUser: value }),

	// -----------------------
	// Navigation Mode
	// -----------------------
	setNavigationMode: value => set({ navigationMode: value }),

	// -----------------------
	// Loading
	// -----------------------
	setLoadingRoute: loading => set({ loadingRoute: loading }),

	// -----------------------
	// Selected Vehicle
	// -----------------------
	setSelectedVehicle: vehicle => set({ selectedVehicle: vehicle }),
	
	
	// Set Location From App 
	setLocation : (location)=>{
	    set({
					currentLocation: location 
	    })
	},
	// -----------------------
	// Get Current Location (Button Click)
	// -----------------------
	myLocation: () => {
		const { map } = get();

		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				const latlng = [coords.latitude, coords.longitude];
				set({
					currentLocation: {
						lat: coords.latitude,
						lng: coords.longitude,
						speed: coords.speed ?? 0,
						heading: coords.heading ?? 0,
						accuracy: coords.accuracy
					}
				});

				if (map) {
					map.flyTo(latlng, 18, {
						animate: true,
						duration: 1.8,
						easeLinearity: 0.25
					});
				}
			},
			err => console.error(err),
			{
				enableHighAccuracy: true,
				timeout: 10000,
				maximumAge: 0
			}
		);
	},

	// -----------------------
	// Continuous Tracking
	// -----------------------
	startLocationTracking: () => {
		const { watchId } = get();

		if (watchId !== null) return;

		const id = navigator.geolocation.watchPosition(
			({ coords }) => {
				set({
					currentLocation: {
						lat: coords.latitude,
						lng: coords.longitude,
						speed: coords.speed ?? 0,
						heading: coords.heading ?? 0,
						accuracy: coords.accuracy
					}
				});
			},
			err => console.error(err),
			{
				enableHighAccuracy: true,
				maximumAge: 1000,
				timeout: 10000
			}
		);

		set({ watchId: id });
	},

	// -----------------------
	// Stop Tracking
	// -----------------------
	stopLocationTracking: () => {
		const { watchId } = get();

		console.log("Watch ID : ", watchId);
		if (watchId !== null) {
			navigator.geolocation.clearWatch(watchId);
			set({ watchId: null });
		}
	},
	detectMovement: () => {
    const { currentLocation } = get();

    if (!currentLocation) return "unknown";

    const speed = currentLocation.speed ?? 0;
    const accuracy = currentLocation.accuracy ?? 999;

    // Ignore unreliable GPS fixes
    if (accuracy > 50) return "unknown";

    if (speed < 0.3) return "stopped";
    if (speed < 2) return "walking";
    if (speed < 4.5) return "running";
    if (speed < 8) return "cycling";
    if (speed < 60) return "driving";

    return "fast";
},
	// -----------------------
	// Reset
	// -----------------------
	resetMap: () =>
		set({
			pickup: null,
			destination: null,
			driverLocation: null,
			route: [],
			distance: 0,
			duration: 0,
			loadingRoute: false,
			selectedVehicle: null,
			navigationMode: false,
			followUser: true
		}),
	
	hideTrip : ()=> set({route: [],
			distance: 0,
			duration: 0,pickup: null,
	destination: null,
	driverLocation: null,})
}));

export default useMapState;
