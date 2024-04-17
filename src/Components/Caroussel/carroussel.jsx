import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import Cards from "../Card/CardsLista";
import "../Caroussel/Caroussel.css";
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const carroussel = () => {
	return (
		<div>
			<Carousel
				itemClass="carousel-item"
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				showDots={true}
				responsive={responsive}
			>
				{Cards.map((card, index) => (
					<Card
						icone={card.icone}
						valor={card.valor}
						empresa={card.empresa}
						desconto={card.desconto}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default carroussel;
