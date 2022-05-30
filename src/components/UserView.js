import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

const UserView = ({ coursesData }) => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const coursesArr = coursesData.map((course) => {
			if (course.isActive) {
				return <CourseCard key={course._id} courses={course} />;
			} else {
				return null;
			}
		});
		setCourses(coursesArr);
	}, [coursesData]);

	return <>{courses}</>;
};

export default UserView;
