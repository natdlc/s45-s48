import UserView from "../components/UserView";
import AdminView from "../components/AdminView";

import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";

const Courses = () => {
	const [allCourses, setAllCourses] = useState([]);

	const fetchData = () => {
		fetch("http://localhost:4000/courses/all")
			.then((res) => res.json())
			.then((data) => {
				setAllCourses(data); // store all data to allCourses useState variable
			});
	};

	const { user } = useContext(UserContext);
	useEffect(() => {
		fetchData();
	}, [allCourses]);
	return (
		<>
			<h1>Courses</h1>

			{user.isAdmin ? (
				<AdminView coursesData={allCourses} fetchData={fetchData} />
			) : (
				<div className="d-flex">
					<UserView coursesData={allCourses} />
				</div>
			)}
		</>
	);
};

export default Courses;
