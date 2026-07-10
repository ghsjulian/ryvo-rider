import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider"
import AppContainer from "./layouts/AppContainer"
// For Riders 
import Rides from "./riders/Rides"


const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AuthProvider />}>
					<Route path="/" element={<AppContainer />}>
					<Route index element={<Rides />}/>
					
					</Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
