import React from "react";
import {motion} from'framer-motion'
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
		<motion.div
		  key={i}
		  initial={{ left: 0, bottom: 0 }}
		  animate={{
			left: [card.left],
			bottom: [card.bottom],
		  }}
		  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
		>
		  <div
			style={{
			  position: "absolute",
			  left: card.left,
			  bottom: card.bottom,
			}}
		  >
			<Card number="7" name="Cristiano" lastname="Ronaldo" bck={card.player} />
		  </div>
		</motion.div>
	  ));
  
	return <div>{showAnimateCards()}</div>;
  };
  
  export default Cards;