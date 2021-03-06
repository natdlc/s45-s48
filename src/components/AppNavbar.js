import { useContext } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

const AppNavbar = () => {
	const { user } = useContext(UserContext);

	return (
		<Row className="bg-dark text-white mb-5 d-flex justify-content-center">
			<Col md={8} className="">
				<Navbar className="sticky-top" expand="md" variant="dark">
					<Navbar.Brand>Codeversity</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/courses">
								Courses
							</Nav.Link>

							{user.accessToken !== null ? (
								<Nav.Link as={Link} to="/logout">
									Logout
								</Nav.Link>
							) : (
								<>
									<Nav.Link as={Link} to="/register">
										Register
									</Nav.Link>
									<Nav.Link as={Link} to="/login">
										Login
									</Nav.Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Col>
		</Row>
	);
};

export default AppNavbar;
