import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const ArchiveCourse = (props) => {
	const { courseId, fetchData, courseIsActive } = props;

	const [showArchiveModal, setShowArchiveModal] = useState(false);
	const [willArchive, setWillArchive] = useState(false);

	const openArchiveModal = () => setShowArchiveModal(true);
	const closeArchiveModal = () => setShowArchiveModal(false);

	const submitHandler = (e) => {
		e.preventDefault();

		if (courseIsActive) {
			if (willArchive) {
				fetch(`https://codeversity.herokuapp.com/courses/${courseId}/archive`, {
					method: "PUT",
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
								text: "Course successfully archived",
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
				closeArchiveModal();
			}
		} else {
			if (willArchive) {
				fetch(
					`https://codeversity.herokuapp.com/courses/${courseId}/unarchive`,
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						},
					}
				)
					.then((res) => res.json())
					.then((data) => {
						if (data) {
							Swal.fire({
								title: "Success",
								icon: "success",
								text: "Course successfully unarchived",
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
				closeArchiveModal();
			}
		}
		closeArchiveModal();
	};

	const yesHandler = () => setWillArchive(true);
	const noHandler = () => setWillArchive(false);

	return (
		<>
			{courseIsActive ? (
				<Button
					className="d-inline-block"
					variant="warning"
					size="sm"
					onClick={openArchiveModal}
				>
					Unarchive
				</Button>
			) : (
				<Button
					className="d-inline-block"
					variant="warning"
					size="sm"
					onClick={openArchiveModal}
				>
					Archive
				</Button>
			)}
			<Modal show={showArchiveModal} onHide={closeArchiveModal}>
				<Form onSubmit={submitHandler}>
					<Modal.Header closeButton>
						{courseIsActive ? (
							<Modal.Title>
								Are you sure you want to unarchive this course?
							</Modal.Title>
						) : (
							<Modal.Title>
								Are you sure you want to archive this course?
							</Modal.Title>
						)}
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

export default ArchiveCourse;
