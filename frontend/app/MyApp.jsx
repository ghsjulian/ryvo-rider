import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { ForegroundService } from "@capawesome-team/capacitor-android-foreground-service";

function MyApp() {
	useEffect(() => {
		const startService = async () => {
			// Only execute on native Android devices
			if (Capacitor.getPlatform() !== "android") return;

			try {
				// Request Notification permission (Required on Android 13+)
				const perm = await ForegroundService.checkPermissions();
				if (perm.display !== "granted") {
					await ForegroundService.requestPermissions();
				}

				// Create the Termux-like Notification Channel
				await ForegroundService.createNotificationChannel({
					id: "doctor_seba_service",
					name: "Background Runner",
					description:
						"Keeps Doctor Seba working continuously in the background.",
					importance: 3 // Default/High priority visibility
				});

				// Start the continuous foreground service
				await ForegroundService.startForegroundService({
					id: 101,
					title: "Doctor Seba is Running",
					body: "The background engine is active.",
					smallIcon: "ic_launcher", // Default App icon
					notificationChannelId: "doctor_seba_service"
				});

				console.log("Foreground service successfully started.");
			} catch (err) {
				console.error("Failed to initialize background service:", err);
			}
		};

		startService();
	}, []);

	return (
		<div style={{ textAlign: "center", marginTop: "20%" }}>
			<h1>Doctor Seba Frontend</h1>
			<p>Android app with an active background service channel.</p>
		</div>
	);
}

export default MyApp;
