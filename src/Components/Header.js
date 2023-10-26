import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { indigo } from "@mui/material/colors";
import RmaLogo from "./RmaLogo";
import { signOut } from "firebase/auth";
import { auth } from "../FireBase/FireBase";
import { useEffect, useState } from "react";

const Header = (user) => {
	const [userLog, setUserLog] = useState();
	const color = indigo[500];
	console.log(user);

	useEffect(() => {
		if (!user) {
			setUserLog(false);
		} else setUserLog(true);
		console.log(userLog);
	}, [userLog,user]);

	const logOutHandler = () => {
		signOut(auth)
			.then(() => {
				alert("LOGOUT");
				setUserLog(false)
			})
			.catch((error) => {
				alert("alert");
			});
	};

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
							width="50px"
							height="70px"></RmaLogo>
					</div>
				</div>

				<Link to="/the_team">
					<Button style={{ color: color }}>The team</Button>
				</Link>
				<Link to="/the_matches">
					<Button style={{ color: color }}>Matches</Button>
				</Link>
				{userLog ? (
					<>
						<Link to="/dashboard">
							<Button style={{ color: color }}>Dashboard</Button>
						</Link>
						<Button onClick={() => logOutHandler()} style={{ color: color }}>
							Log Out
						</Button>
					</>
				) : null}
			</Toolbar>
		</AppBar>
	);
};
export default Header;
