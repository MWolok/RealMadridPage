import { Navigate } from "react-router-dom";
import { auth } from "../FireBase/FireBase";

const AuthGuard = (Component) => {
	const authCheck = () => {
		const user = auth.currentUser;
		if (user) {
			return <Component {...this.props} />;
		} else {
			return <Navigate to="/login" replace />;
		}
	};

	return authCheck();
};

export default AuthGuard;
