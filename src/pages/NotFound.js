import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
	
	const NotFound = () => {
	return (
		<>
			<h1>This page doesn't exist.</h1>
			<p>
				Go back to the{" "}
				<Button className="d-inline-block" variant="dark" as={Link} to="/">
					Home page
				</Button>
			</p>
		</>
	);
};

export default NotFound;
