import { useState, useMemo } from "react";

import { cardType, elementType } from "../../data/types";
import gameElements from "../../data/gameElements";
import { modes } from "../../data/gameOptions";
import LanguageCard from "../../components/LanguageCard";

import { Screen, CardsContainer } from "./styles";

const shuffle = (dimension: number, elements: elementType[]) => {
	const totalCards = dimension ** 2;
	const selectedOptions = elements.slice(0, totalCards / 2);
	const ObjectCards: cardType[] = selectedOptions.map((elem) => {
		const object: cardType = {
			element: elem,
			id: 0,
		};
		return object;
	});
	const ObjectCardsCopy: cardType[] = ObjectCards.map((object) => ({
		element: object.element,
		id: 1,
	}));
	const doubledOptions = ObjectCards.concat(ObjectCardsCopy);
	return doubledOptions.sort(() => Math.random() - 0.5);
};

export default function MemoryGame() {
	const [dimension, setDimension] = useState<number>(modes.easy);
	const [selectedCard, setSelected] = useState<cardType | null>(null);

	const shuffledCards = useMemo<cardType[]>(() => shuffle(dimension, gameElements), [dimension, gameElements]);

	const handleClick = (card: cardType) => {
		console.log(card, selectedCard);

		if (!selectedCard) {
			setSelected(card);
			return;
		} else if (card === selectedCard) {
			console.log("EQUAL");
		} else if (card.element === selectedCard.element) {
			console.log("UHUL");
		}

		setSelected(null);
	};

	return (
		<Screen>
			<CardsContainer dimension={dimension}>
				{shuffledCards.map((card, index) => (
					<LanguageCard key={`${card.element}-${card.id}`} onClick={() => handleClick(card)}>
						{card.element}
					</LanguageCard>
				))}
			</CardsContainer>
		</Screen>
	);
}
