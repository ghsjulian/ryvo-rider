import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import AppContainer from "./layouts/AppContainer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AuthProvider />}>
					<Route index path="/" element={<AppContainer />} />
				</Route>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
