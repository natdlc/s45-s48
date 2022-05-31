import { useState, useEffect, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import Swal from "sweetalert2";

const Login = () => {
	const navigate = useNavigate();

	/* FETCH

	--> method in js to send request to api and process its response

	--> syntax
		fetch('url', {optional objects})
		.then(response => response.json()) --> parse response as json
		.then(actualData => console.log(actualData)) --> process result of response

	--> from the syntax
		url: api url
		optional objects: contains addl info abt requests (ie method, body, headers)

	*/

	// Consume User Context object its properties for user validation and email coming from login
	const { setUser, user } = useContext(UserContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);

	const userLoginHandler = (e) => {
		e.preventDefault();

		fetch("https://codeversity.herokuapp.com/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.accessToken) {
					localStorage.setItem("accessToken", data.accessToken);
					setUser({
						accessToken: data.accessToken,
					});
					Swal.fire({
						title: "SUCCESS",
						icon: "success",
						text: "You are now logged in",
					});
					// get user details from token
					fetch("https://codeversity.herokuapp.com/users/details", {
						headers: {
							Authorization: `Bearer ${data.accessToken}`,
						},
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.isAdmin) {
								localStorage.setItem("isAdmin", data.isAdmin);
								setUser({
									isAdmin: data.isAdmin,
								});

								// if admin, push to /courses
								navigate("/courses");
							} else {
								// if not admin, push to '/'
								navigate("/");
							}
						});
				} else {
					Swal.fire({
						title: "Login failed",
						icon: "error",
						text: "Email or password is incorrect",
					});
				}
				setEmail("");
				setPassword("");
			});
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

	return user.accessToken ? (
		<Navigate to="/courses" />
	) : (
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
			</Form>
		</Col>
	);
};

export default Login;
