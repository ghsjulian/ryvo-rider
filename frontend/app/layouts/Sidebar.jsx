import React from "react";
import { NavLink } from "react-router-dom";
import useMapState from "../store/useMapState"


const Sidebar = () => {
    const {isActive} = useMapState()
	return (
		<aside className={isActive&&"active"}>
			<div className="top-header">
				<h3>Main Menu </h3>
				<button>
					<img src="/icons/search.png" title="Search" alt="search" />
				</button>
			</div>
			<NavLink to="#">
				<img src="/icons/user.png" title="Profile" alt="profile" />
				<span>Your Profile</span>
			</NavLink>
			<NavLink to="#">
				<img src="/icons/clock.png" title="History" alt="History" />
				<span>Ride Histories</span>
			</NavLink>
			<NavLink to="#">
				<img
					src="/icons/settings.png"
					title="Settings"
					alt="Settings"
				/>
				<span>Settings</span>
			</NavLink>
			<NavLink to="#">
				<img src="/icons/logout.png" title="Logout" alt="logout" />
				<span>Logout</span>
			</NavLink>
		</aside>
	);
};

export default Sidebar;
