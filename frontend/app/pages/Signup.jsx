import React from "react";
import "../styles/login-auth.css";

const Signup = () => {
	return (<section className="page">
		<div className="signup-container">
			<header className="header">
				<h1 className="logo">Ryvo Rider</h1>
				<p className="subtitle">Create your account to start riding</p>
			</header>
			<form id="signupForm" novalidate>
				<div className="form-group">
					<input
						type="text"
						id="fullname"
						className="form-input"
						placeholder=" "
						minLength="3"
					/>
					<label for="fullname" className="form-label">
						Full Name
					</label>
					<div className="error-message">
						Please enter at least 3 characters.
					</div>
				</div>
				<div className="form-group">
					<input
						type="email"
						id="email"
						className="form-input"
						placeholder=" "
					/>
					<label for="email" className="form-label">
						Email Address
					</label>
					<div className="error-message">
						Please enter a valid email address.
					</div>
				</div>
				<div className="form-group">
					<input
						type="tel"
						id="phone"
						className="form-input"
						placeholder=" "
						pattern="[0-9]{10,15}"
					/>
					<label for="phone" className="form-label">
						Phone Number
					</label>
					<div className="error-message">
						Please enter a valid phone number.
					</div>
				</div>
				<div className="form-group">
					<input
						type="password"
						id="password"
						className="form-input"
						placeholder=" "
						minLength="6"
					/>
					<label for="password" className="form-label">
						Password
					</label>
					<div className="error-message">
						Password must be at least 6 characters long.
					</div>
				</div>
				<p className="terms">
					By proceeding, you agree to Ubar's{" "}
					<a href="#">Terms of Service</a> and acknowledge you have
					read the <a href="#">Privacy Policy</a>.
				</p>
				<button type="submit" className="btn-submit">
					Sign Up <span className="arrow-icon">→</span>
				</button>
			</form>
			<div className="footer-link">
				Already have an account? <a href="#">Log in</a>
			</div>
		</div>
		</section>
	);
};

export default Signup;
