import Header from "../../Components/Header";
import Featured from "./Featured";
import { easeLinear } from "d3-ease";
import { Animate } from "react-move";
import Matches from "./Matches";

const Home = () => {
	return (
		<>
			<div className="featured_wrapper">
				<Featured></Featured>
			</div>
			<Matches></Matches>
		</>
	);
};
export default Home;
