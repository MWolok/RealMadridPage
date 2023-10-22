import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn/SignIn";
const RouterComp = () => {
	return (
		<Router>
			<Header></Header>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/LogIn" element={<SignIn />} />
			</Routes>
			<Footer></Footer>
		</Router>
	);
};
export default RouterComp;
