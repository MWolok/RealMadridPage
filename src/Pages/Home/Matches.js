import Blocks from "./Blocks";
import Tag from "./Tag";

const Matches = () => {
	return (
		<>
			<div className="home_matches_wrapper">
				<div className="container">
					<Tag size="50px">Matches</Tag>
                    <Blocks></Blocks>
					<Tag size="22px" color="#0e1731" link={true} linkTo="/the_team">
						Matches
					</Tag>
				</div>
			</div>
		</>
	);
};
export default Matches;
