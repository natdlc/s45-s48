import { useEffect, useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../UserContext";

const Register = () => {
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

	const emailChangeHandler = (e) => setEmail(e.target.value);
	const passwordChangeHandler = (e) => setPassword(e.target.value);
	const vPasswordChangeHandler = (e) => setVerifyPassword(e.target.value);

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (email && password && verifyPassword && password === verifyPassword) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password, verifyPassword]);

	const clearFields = () => {
		setEmail("");
		setPassword("");
		setVerifyPassword("");
	};

	const registerUser = (e) => {
		e.preventDefault();
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Thank you for signing up",
			color: "#212529",
		});
		clearFields();
	};

	return user.email ? (
		<Navigate to="/courses" />
	) : (
		<Col md={4}>
			<h1 className="pb-5">Register</h1>
			<Form
				onSubmit={registerUser}
				className="register border border-dark p-5 mb-5"
			>
				<Form.Group className="mb-3">
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						onChange={emailChangeHandler}
						type="email"
						placeholder="enter email"
						value={email}
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else
					</Form.Text>
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
				<Form.Group className="mb-3">
					<Form.Label>Verify Password</Form.Label>
					<Form.Control
						onChange={vPasswordChangeHandler}
						type="password"
						placeholder="enter password"
						value={verifyPassword}
					/>
				</Form.Group>
				{isActive ? (
					<Button variant="dark" type="submit">
						Submit
					</Button>
				) : (
					<Button disabled variant="dark" type="submit">
						Submit
					</Button>
				)}
			</Form>
		</Col>
	);
};

export default Register;
