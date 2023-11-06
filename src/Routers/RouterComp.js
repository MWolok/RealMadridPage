import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
		<Header user={user} />
		<Routes>
		  <Route path="/home" element={<Home />} />
		  
		  <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
		  
		  <Route path="/LogIn" element={<SignIn user={user} />} />
		</Routes>
		<ToastContainer />
		<Footer />
	  </Router>
	);
  };
  
  export default RouterComp;
