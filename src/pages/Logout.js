import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

const Logout = () => {
	const { unsetUser, setUser } = useContext(UserContext);
	unsetUser();
	useEffect(() => {
		setUser({ accessToken: null });
	}, []);
	return (
		<>
			<Navigate to="/" />
		</>
	);
};

export default Logout;
