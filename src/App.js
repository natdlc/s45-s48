import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import { Container } from "react-bootstrap";

// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


	return (
		<Router>
			<AppNavbar />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</Router>
	);
};
export default App;
