import React,{useState,useEffect} from "react";
import { NavLink,useNavigate ,Outlet} from 'react-router-dom'
import NavBar from "./NavBar"
import BottomBar from "./BottomBar"


const AppContainer = () => {
	return (
	    <>
	    <NavBar/>
		<main className="main-container">
			<Outlet/>
		</main>
		<BottomBar/>
		</>
	);
};

export default AppContainer;
