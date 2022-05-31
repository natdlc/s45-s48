import { useState } from "react";

import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import SpecificCourse from "./pages/SpecificCourse";
import { Container } from "react-bootstrap";
import { UserProvider } from "./UserContext";

// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	// state hook for user state defined here for global scope
	// used to store user info and validating if a user is logged in

	const [user, setUser] = useState({
		accessToken: localStorage.getItem("accessToken"),
		isAdmin: localStorage.getItem("isAdmin") === "true",
	});

	// function for clearing local storage on logout
	const unsetUser = () => {
		localStorage.clear();
	};

	return (
		<UserProvider value={{ user, setUser, unsetUser }}>
			<Router>
				<AppNavbar />
				<Container>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/courses/:courseId" element={<SpecificCourse />} />
						<Route path="/courses/" element={<Courses />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Container>
			</Router>
		</UserProvider>
	);
}
export default App;
