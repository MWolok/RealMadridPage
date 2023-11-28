import Header from "../../Components/Header";
import Featured from "./Featured";
import { easeLinear } from "d3-ease";
import { Animate } from "react-move";
import Matches from "./Matches";
import Players from "./Players/Players";
import Promotion from "./Promotion/Promotion";

const Home = () => {
	return (
		<>
			<div className="bck_blue">
				<Featured></Featured>
				<Matches></Matches>
				<Players></Players>
				<Promotion></Promotion>
			</div>
			
		</>
	);
};
export default Home;
