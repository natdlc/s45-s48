import { useState, useEffect, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

const Login = () => {
	// Consume User Context object its properties for user validation and email coming from login
	const { setUser } = useContext(UserContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const userLoginHandler = (e) => {
		e.preventDefault();

		// set email of authed user in localStorage
		localStorage.setItem("email", email);

		// set global user state to have properties obtained from local storage
		setUser({ email: localStorage.getItem("email") });

		localStorage.setItem("password", password);

		setEmail("");
		setPassword("");
		setIsLoggedIn(true);
	};

	const redirect = () => {
		return (
			<>
				<Navigate to="/" />
			</>
		);
	};

	const loginInputs = () => {
		if (email && password) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	useEffect(loginInputs, [email, password]);

	const emailChangeHandler = (e) => setEmail(e.target.value);
	const passwordChangeHandler = (e) => setPassword(e.target.value);

	return (
		<Col md={8} lg={6} xl={4}>
			<h1 className="pb-5">Login</h1>
			<Form onSubmit={userLoginHandler} className="border border-dark p-5 mb-5">
				<Form.Group className="mb-3">
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						onChange={emailChangeHandler}
						type="email"
						placeholder="enter email"
						value={email}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={passwordChangeHandler}
						type="password"
						placeholder="enter password"
						value={password}
					/>
				</Form.Group>
				{isActive ? (
					<Button variant="dark" type="submit">
						Login
					</Button>
				) : (
					<Button disabled variant="dark" type="submit">
						Login
					</Button>
				)}

				{isLoggedIn ? redirect() : false}
			</Form>
		</Col>
	);
};

export default Login;
