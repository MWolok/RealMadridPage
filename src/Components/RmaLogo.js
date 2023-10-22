import Rma from "../Img/image.png";
const RmaLogo = (props) => {
	return (
		<div
			className="img_cover"
			style={{
				width: props.width,
				height: props.height,
                background:`url(${Rma}) no-repeat`
			}}></div>
	);
};
export default RmaLogo;
