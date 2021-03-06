import { useState, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CourseCard = ({ courses }) => {
	const { _id, name, description, price } = courses;

	let [count, setCount] = useState(0);
	let [seat, setSeat] = useState(30);

	let [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		if (seat === 0) {
			setIsOpen(false);
		}
	}, [seat]);

	const enrollHandler = () => {
		setCount(++count);
		setSeat(--seat);
	};
	return (
		<Col md={3} className="py-3">
			<Card className="course border border-dark">
				<Card.Body>
					<Card.Title>{name}</Card.Title>

					<Card.Subtitle>Description:</Card.Subtitle>
					<Card.Text className="description">{description}.</Card.Text>

					<Card.Subtitle>Price:</Card.Subtitle>
					<Card.Text>Php {price}</Card.Text>

					<Button variant="dark" as={Link} to={`/courses/${_id}`}>
						Details
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

// verify property data types requirements
CourseCard.propTypes = {
	courses: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}),
};

export default CourseCard;
