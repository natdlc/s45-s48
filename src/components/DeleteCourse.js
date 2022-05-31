import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const DeleteCourse = (props) => {
	const { courseId, fetchData } = props;

	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [willDelete, setWillDelete] = useState(false);

	const openDeleteModal = () => setShowDeleteModal(true);
	const closeDeleteModal = () => setShowDeleteModal(false);

	const submitHandler = (e) => {
		e.preventDefault();

		if (willDelete) {
			fetch(`http://localhost:4000/courses/${courseId}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						Swal.fire({
							title: "Success",
							icon: "success",
							text: "Course successfully deleted",
						});
						fetchData();
					} else {
						Swal.fire({
							title: "error",
							icon: "error",
							text: "Please try again",
						});

						fetchData();
					}
				});
		} else {
			console.log("course not deleted");
		}

		closeDeleteModal();
	};

	const yesHandler = () => setWillDelete(true);
  const noHandler = () => setWillDelete(false);

	return (
		<>
			<Button
				className="d-inline-block"
				variant="danger"
				size="sm"
				onClick={openDeleteModal}
			>
				Delete
			</Button>
			<Modal show={showDeleteModal} onHide={closeDeleteModal}>
				<Form onSubmit={submitHandler}>
					<Modal.Header closeButton>
						<Modal.Title>
							Are you sure you want to delete this course?
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Button
							onClick={yesHandler}
							type="submit"
							className="m-2"
							variant="danger"
						>
							Yes
						</Button>
						<Button
							onClick={noHandler}
							type="submit"
							className="m-2"
							variant="dark"
						>
							No
						</Button>
					</Modal.Body>
				</Form>
			</Modal>
		</>
	);
};

export default DeleteCourse;
