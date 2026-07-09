import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/login-auth.css";
import useAuth from "../store/useAuth";

const Login = () => {
	const { serverResponse, useLogin, isLoading } = useAuth();
	const navigate = useNavigate();

	// Form field states
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	// Validation error states (empty string means valid/no error)
	const [errors, setErrors] = useState({
		email: "",
		password: ""
	});

	// Validation helper functions
	const validateField = (name, value) => {
		let errorMsg = "";
		switch (name) {
			case "email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(value)) {
					errorMsg = "✘ Please enter a valid email address.";
				}
				break;
			case "password":
				if (value.length < 6) {
					errorMsg = "✘ Password must be at least 6 characters long.";
				}
				break;
			default:
				break;
		}

		return errorMsg;
	};

	// Live typing handler
	const handleChange = e => {
		const { id, name, type, value } = e.target;

		setFormData(prev => ({ ...prev, [id]: value }));
		// Live Validation
		const errorMsg = validateField(id, value);
		setErrors(prev => ({ ...prev, [id]: errorMsg }));
	};

	// Form Submission Handler
	const handleSubmit = async e => {
		e.preventDefault();
		// Final check over all fields
		const finalErrors = {};
		Object.keys(formData).forEach(key => {
			if (key !== "role") {
				const msg = validateField(key, formData[key]);
				if (msg) finalErrors[key] = msg;
			}
		});
		if (Object.keys(finalErrors).length > 0) {
			setErrors(finalErrors);
			return;
		}
		await useLogin(formData, navigate);
	};

	// Helper to determine CSS classes for the inputs
	const getInputClass = fieldId => {
		if (!formData[fieldId]) return "form-input"; // neutral state when empty
		return errors[fieldId] ? "form-input error" : "form-input success";
	};

	return (
		<section className="page">
			<div className="signup-container">
				<header className="header">
					<h1 className="logo">Ryvo Rider</h1>
					<p className="subtitle">
						Login your account to start riding
					</p>
				</header>
				<form id="signupForm" noValidate onSubmit={handleSubmit}>
					{serverResponse && (
						<div className={serverResponse?.type}>
							{serverResponse?.message}
						</div>
					)}
					{/* Email */}
					<div className="form-group">
						<input
							type="email"
							id="email"
							className={getInputClass("email")}
							placeholder=" "
							value={formData.email}
							onChange={handleChange}
						/>
						<label htmlFor="email" className="form-label">
							Email Address
						</label>
						{errors.email && (
							<div className="error-message">{errors.email}</div>
						)}
						{!errors.email && formData.email && (
							<div className="success-message">
								✔ Email address is ok
							</div>
						)}
					</div>
					{/* Password */}
					<div className="form-group">
						<input
							type="password"
							id="password"
							className={getInputClass("password")}
							placeholder=" "
							value={formData.password}
							onChange={handleChange}
						/>
						<label htmlFor="password" className="form-label">
							Password
						</label>
						{errors.password && (
							<div className="error-message">
								{errors.password}
							</div>
						)}
						{!errors.password && formData.password && (
							<div className="success-message">
								✔ Password is ok
							</div>
						)}
					</div>
					<button
						type="submit"
						className="btn-submit"
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<div className="spinner"></div> Processing...
							</>
						) : (
							<>
								{" "}
								Login Now <span className="arrow-icon">→</span>
							</>
						)}
					</button>
				</form>
				<div className="footer-link">
					Don't have an account?{" "}
					<NavLink to="/signup">Sing Up</NavLink>
				</div>
			</div>
		</section>
	);
};

export default Login;
