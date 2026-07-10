import React from "react";

const BottomBar = () => {
	return (
		<nav className="bottom-nav" id="mobileMenu">
			<button className="tab-item" title="Rides" data-tab="rides">
				<img src="/icons/taxi.png" alt="Rides" />
				<span>Rides</span>
			</button>
			<button className="tab-item" title="Trips" data-tab="wallet">
				<img src="/icons/distance.png" alt="Trips" />
				<span>Trips</span>
			</button>
			<button className="tab-item" title="Health" data-tab="wallet">
				<img src="/icons/healthcare.png" alt="Health" />
				<span>Health</span>
			</button>
			<button className="tab-item" title="Support" data-tab="wallet">
				<img src="/icons/support.png" alt="Support" />
				<span>Support</span>
			</button>
			<button className="tab-item" title="Profile" data-tab="profile">
				<img src="/icons/user.png" alt="Rides" />
				<span>Profile</span>
			</button>
		</nav>
	);
};

export default BottomBar;
