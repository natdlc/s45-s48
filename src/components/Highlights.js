import { Row, Col, Card, Button } from "react-bootstrap";

const Highlights = () => {
	return (
		<Row className="py-5">
			<Col xs={12} md={4} className="py-4">
				<Card className="border border-dark highlights-card">
					<Card.Body className="p-0">
						<Card.Title className="bg-dark">
							<h2 className="text-white p-2">Learn from Home</h2>
						</Card.Title>
						<Card.Text className="p-2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
							debitis esse explicabo eum ipsam amet placeat! Aliquam, nam
							soluta?
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4} className="py-4">
				<Card className="border border-dark highlights-card">
					<Card.Body className="p-0">
						<Card.Title className="bg-dark">
							<h2 className="text-white p-2">Affordable Courses</h2>
						</Card.Title>
						<Card.Text className="p-2">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut rem
							dolores cumque deserunt beatae molestias, sed tempora ipsa
							praesentium, reprehenderit id totam obcaecati sunt expedita.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4} className="py-4">
				<Card className="border border-dark highlights-card">
					<Card.Body className="p-0">
						<Card.Title className="bg-dark">
							<h2 className="text-white p-2 ps-4">
								Join Our Welcoming Community
							</h2>
						</Card.Title>
						<Card.Text className="p-2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
							debitis esse explicabo eum ipsam amet placeat! Aliquam, nam
							soluta?
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Highlights;
