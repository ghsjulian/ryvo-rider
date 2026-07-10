import React from "react";
import "../styles/rides.css";

const Rides = () => {
	return (
		<div className="content">
			<div id="riderDashboard">
				<div className="kit-alert">
					<span>❤️</span>
					<span>
						<strong>Lifesaving Kit Included:</strong> All rides
						carry AED Defibrillator, BP/Heart Rate Monitors, &
						Oxygen Concentrators.
					</span>
				</div>
				<div className="card">
					<div className="card-title">Where to?</div>
					<div className="destination-box">
						<div className="input-row">
							<span className="dot-icon dot-green"></span>
							<input
								type="text"
								className="location-input"
								value="Current Location (Home)"
								readonly
							/>
						</div>
						<div className="input-row">
							<span className="dot-icon dot-red"></span>
							<select
								className="destination-select"
								id="dropoffDestination"
							>
								<option value="">
									Select Specialized Destination...
								</option>
								<option value="airport">
									Airport Terminal
								</option>
								<option value="train">Train Station</option>
								<option value="bus">Bus Station</option>
								<option value="port">Cruise Ship Port</option>
							</select>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-title">Select Travel Class</div>
					<div className="tier-selector">
						<div
							className="tier-card selected"
							onclick="selectTier(this)"
						>
							<div className="tier-header">
								<span className="tier-name">Silver</span>
								<span className="tier-badge badge-silver">
									Intermediate
								</span>
								<span className="tier-price">$24.50</span>
							</div>
							<div className="tier-amenities">
								Wi-Fi • Personalized Music • Portable Lifesaving
								Kit • Hand Sanitizer
							</div>
						</div>
						<div className="tier-card" onclick="selectTier(this)">
							<div className="tier-header">
								<span className="tier-name">Gold</span>
								<span className="tier-badge badge-gold">
									Premium
								</span>
								<span className="tier-price">$38.00</span>
							</div>
							<div className="tier-amenities">
								Wi-Fi • Custom Music • Lifesaving Kit • Snacks &
								Sparkling Water • Sanitizer
							</div>
						</div>
						<div className="tier-card" onclick="selectTier(this)">
							<div className="tier-header">
								<span className="tier-name">Platinum</span>
								<span className="tier-badge badge-platinum">
									Luxury
								</span>
								<span className="tier-price">$55.00</span>
							</div>
							<div className="tier-amenities">
								Luxury Vehicle • Wi-Fi • Snacks & Water • Tablet
								Use • Neck Pillow • Window Shades
							</div>
						</div>
						<div className="tier-card" onclick="selectTier(this)">
							<div className="tier-header">
								<span className="tier-name">Specialty Van</span>
								<span className="tier-badge badge-specialty">
									Lift & Ramp
								</span>
								<span className="tier-price">$45.00</span>
							</div>
							<div className="tier-amenities">
								Mobility Impaired Accommodations • Ramp/Lift
								Equipped • Full Medical Kit Included
							</div>
						</div>
					</div>
				</div>
				<div className="flex-area">
					<button className="btn-action" onclick="requestRide()">
						Request Ride
					</button>
					<button className="ride-later" onclick="requestRide()">
						Ride Latter
					</button>
				</div>
			</div>
		</div>
	);
};

export default Rides;
