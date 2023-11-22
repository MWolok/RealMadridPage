import { Fade } from "react-awesome-reveal";
import { Tag } from "../Tag";
import Cards from "./Cards";

const Players = () => {

    let tagDefault = {
        bck:'#0e1731',
        size:'100px',
        color:'#ffffff'
    }


    const showText = (text) => (
        <Tag
            {...tagDefault}
            add={{
                display:'inline-block',
                marginBottom:'20px'
            }}
        >
            {text}
        </Tag>
    )


	return (
		<>
			<Fade triggerOnce>
				<div className="home_meetplayers">
					<div className="container">
						<div className="home_meetplayers_wrapper">
							<div className="home_card_wrapper"><Cards></Cards></div>
							<div className="home_text_wrapper">
								<div>{showText("Meet")}</div>
								<div>{showText("The")}</div>
								<div>{showText("Players")}</div>
								<div>
									<Tag
										bck="#ffffff"
										size="27px"
										color="#0e1731"
										link={true}
										linkTo="/the_team"
										add={{
											display: "inline-block",
											marginBottom: "27px",
											border: "1px solid #0e1731",
										}}>
										Meet them here
									</Tag>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</>
	);
};
export default Players;
