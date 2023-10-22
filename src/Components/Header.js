import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { indigo } from "@mui/material/colors";
import RmaLogo from "./RmaLogo";

const Header = () => {
	const color = indigo[500];
	return (
		<AppBar
			position="fixed"
			style={{
				backgroundColor: "#FFFFCC",
				boxShadow: "none",
				paddin: "10px 0",
				borderBottom: "2px solid #3E7FD4",
			}}>
			<Toolbar style={{ display: "flex" }}>
				<div style={{ flexGrow: 1 }}>
					<div className="header_logo">
						<RmaLogo 
                        link={true}
                         linkTo={"/"}
                         width='50px'
                         height='70px'></RmaLogo>
					</div>
				</div>

				<Link to="/the_team">
					<Button style={{ color: color }}>The team</Button>
				</Link>
				<Link to="/the_matches">
					<Button style={{ color: color }}>Matches</Button>
				</Link>

				<Link to="/dashboard">
					<Button style={{ color: color }}>Dashboard</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
};
export default Header;
