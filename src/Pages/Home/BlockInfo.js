import React from "react";
import Rma from "../../Img/image.png"

const MatchesBlock = ({ match }) => {
	return (
		<div className="match_block">
			<div className="match_date">{match.date}</div>
			<div className="match_wrapper">
				<div className="match_top">
					<div className="left">
						<div
							className="icon"
							style={{
								background: `url(${Rma}) no-repeat`,
							}}></div>
						<div className="team_name">{match.homeTeam}</div>
					</div>
					<div className="right">{match.homeTeamGoals}</div>
				</div>
				<div className="match_bottom">
					<div className="left">
						<div className="icon" style={{}}></div>
						<div className="team_name">{match.awayTeam}</div>
					</div>
					<div className="right">{match.awayTeamGoals}</div>
				</div>
			</div>
		</div>
	);
};

export default MatchesBlock;
