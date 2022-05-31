import { useState } from "react";
import { Button, Modal, Form, ToggleButton } from "react-bootstrap";
import Swal from "sweetalert2";

const EditCourse = (props) => {
	const { courseId, fetchData } = props;

	const [showEditModal, setShowEditModal] = useState(false);

	const openEditModal = () => setShowEditModal(true);
	const closeEditModal = () => setShowEditModal(false);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [isActive, setIsActive] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		fetch(`http://localhost:4000/courses/${courseId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price,
				isActive: isActive,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					Swal.fire({
						title: "Success",
						icon: "success",
						text: "Course successfully edited",
					});

					closeEditModal();
					fetchData();
				} else {
					Swal.fire({
						title: "error",
						icon: "error",
						text: "Please try again",
					});

					fetchData();
				}

				//reset all states input
				setName("");
				setDescription("");
				setPrice(0);
			});
	};

	return (
		<>
			<Button
				className="d-inline-block"
				variant="dark"
				size="sm"
				onClick={openEditModal}
			>
				Update
			</Button>
			<Modal show={showEditModal} onHide={closeEditModal}>
				<Form onSubmit={submitHandler}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Course</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group>
							<ToggleButton
								className="mt-3"
								id="toggle-check"
								type="checkbox"
								variant="outline-dark"
								checked={isActive}
								value={true}
								onChange={(e) => setIsActive(e.currentTarget.checked)}
							>
								Active
							</ToggleButton>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={closeEditModal}>
							Close
						</Button>
						<Button variant="dark" type="submit">
							Submit
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default EditCourse;
