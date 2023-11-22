import React from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import cr7 from "../../../Img/cr7.png";
import Card from "./Card";

let cards = [
	{
		bottom: 90,
		left: 300,
		player: cr7,
	},
	{
		bottom: 60,
		left: 200,
		player: cr7,
	},
	{
		bottom: 30,
		left: 100,
		player: cr7,
	},
	{
		bottom: 0,
		left: 0,
		player: cr7,
	},
];
const Cards = (props) => {
	const showAnimateCards = () =>
		cards.map((card, i) => (
			<Animate
				key={i}
				show={props.show}
				start={{
					left: 0,
					bottom: 0,
				}}
				enter={{
					left: [card.left],
					bottom: [card.bottom],
					timing: { delay: 500, duration: 500, ease: easePolyOut },
				}}>
				{({ left, bottom }) => (
					<div
						style={{
							position: "absolute",
							left,
							bottom,
						}}>
						<Card
							number="7"
							name="Cristiano"
							lastname="Ronaldo"
							bck={card.player}
						/>
					</div>
				)}
			</Animate>
		));

	return <div>{showAnimateCards()}</div>;
};
export default Cards;
