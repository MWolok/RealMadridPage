import ListItem from "@mui/material/ListItem";


import { Link, useNavigate } from "react-router-dom";
import { logOutHandler } from "../../FireBase/FireBase";

const AdminNav = (props) => {
	const navigate = useNavigate();

	const links = [
		{
			title: "Matches",
			linkTo: "/admin_matches",
		},
		{
			title: "Players",
			linkTo: "/admin_players",
		},
	];

	const renderItems = () =>
		links.map((link) => (
			<ListItem button className="admin_nav_link" key={link.title}>
				<Link to={link.linkTo}>{link.title}</Link>
			</ListItem>
		));

	return (
		<div>
			{renderItems()}
			<ListItem
				button
				className="admin_nav_link"
				onClick={() => {
					logOutHandler();
					navigate("/"); // Przekierowanie do innej ścieżki po wylogowaniu
				}}>
				Log out
			</ListItem>
		</div>
	);
};

export default AdminNav;
