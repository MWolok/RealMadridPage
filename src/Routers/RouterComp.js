import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SignIn from "../Components/SignIn/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthGuard from "../Routers/Auth";
import Dashboard from "../Components/Admin/Dashboard";

const RouterComp = ({ user }) => {
	return (
		<Router>
			<Header user={user}></Header>
			<Routes>
				<Route path="/home" element={<Home />} />
			
				<Route path="/dashboard" element={AuthGuard(<Dashboard></Dashboard>)} />

				<Route path="/LogIn" element={<SignIn />} />
			</Routes>
			<ToastContainer></ToastContainer>

			<Footer></Footer>
		</Router>
	);
};
export default RouterComp;
