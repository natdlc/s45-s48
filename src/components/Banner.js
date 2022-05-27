import { Button, Row, Col } from "react-bootstrap";

const Banner = (props) => {
	return (
		<Row>
			<Col className="p-1">
				<h1 className="mb-3 display-1">Codeversity</h1>
				<h4 className="mb-3">Coding and Web Development courses</h4>
				<p className="mb-3 text-secondary">
					Made for beginners, advanced, and experts.
				</p>
				<Button variant="dark">Start Learning</Button>
			</Col>
		</Row>
	);
};

export default Banner;
