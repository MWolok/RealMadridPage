import { Link } from "react-router-dom";
export const Tag = (props) => {
	const template = (
		<div
			style={{
				background: props.bck ? props.bck : "#ffffff",
				fontSize: props.size ? props.size : "15px",
				color: props.color ? props.color : "#000000",
				padding: "5px 10px",
				display: "inline-block",
				fontFamily: "Righteous",
                marginLeft:"15px",
				...props.add,
			}}>
			{props.children}
		</div>
	);

	if (props.link) {
		return <Link to={props.linkTo}>{template}</Link>;
	} else {
		return template;
	}
};
export default Tag;
