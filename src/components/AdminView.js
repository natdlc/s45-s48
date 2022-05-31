import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";
import DeleteCourse from "./DeleteCourse";
import ArchiveCourse from "./ArchiveCourse";

const AdminView = (props) => {
	const [courses, setCourses] = useState([]);

	const { coursesData, fetchData } = props;

	useEffect(() => {
		const coursesArr = coursesData.map((course) => {
			return (
				<tr key={course._id}>
					<td>{course._id}</td>
					<td>{course.name}</td>
					<td>{course.description}</td>
					<td>{course.price}</td>
					<td className={course.isActive ? "text-success" : "text-danger"}>
						{course.isActive ? "Available" : "Unavailable"}
					</td>
					<td className="d-flex align-items-center gap-2">
						<EditCourse courseId={course._id} fetchData={fetchData} />
						<ArchiveCourse
							courseId={course._id}
							fetchData={fetchData}
							courseIsActive={course.isActive}
						></ArchiveCourse>
						<DeleteCourse
							courseId={course._id}
							fetchData={fetchData}
						></DeleteCourse>
					</td>
				</tr>
			);
		});
		setCourses(coursesArr);
	}, [coursesData]);


	return (
		<>
			<div>
				<AddCourse fetchData={fetchData} />
			</div>
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>DESCRIPTION</th>
						<th>PRICE</th>
						<th>AVAILABILITY</th>
						<th>ACTIONS</th>
					</tr>
				</thead>
				<tbody>{courses}</tbody>
			</Table>
		</>
	);
};

export default AdminView;
