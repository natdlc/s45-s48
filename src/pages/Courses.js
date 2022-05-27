import CourseCard from "../components/CourseCard";
import courses from "../mock-data/courses";
import { Row } from "react-bootstrap";

const Courses = () => {
	const mappedCourses = courses.map((course) => (
		<CourseCard key={course.id} courses={course} />
	));

	return (
		<>
			<h1>Courses</h1>
			<Row className="py-5">{mappedCourses}</Row>
		</>
	);
};

export default Courses;
