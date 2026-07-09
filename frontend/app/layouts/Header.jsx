import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import useMapState from "../store/useMapState"


const Header = () => {
    const {openMenu} = useMapState()
	return <header>
	<div className="logo">
	<h3>Ryvo Rider</h3>
	</div>
	<button
	onClick={openMenu}
	><IoMdMenu size={25} /></button>
	</header>;
};

export default Header;
