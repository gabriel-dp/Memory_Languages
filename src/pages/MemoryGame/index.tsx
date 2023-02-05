import { useState, useMemo, useEffect } from "react";

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

function timeout(delay: number) {
	return new Promise((res) => setTimeout(res, delay));
}

export default function MemoryGame() {
	const [dimension, setDimension] = useState<number>(modes.easy);

	type gameCard = cardType | null;
	const [first, setFirst] = useState<gameCard>(null);
	const [second, setSecond] = useState<gameCard>(null);
	const [active, setActive] = useState<number[]>(Array.from({ length: dimension ** 2 }, (_, i) => i));

	const shuffledCards = useMemo<cardType[]>(() => shuffle(dimension, gameElements), [dimension, gameElements]);

	const handleClick = (card: cardType) => {
		console.log(active);
		if (!first) {
			setFirst(card);
		} else if (!second) {
			setSecond(card);
		}
	};

	useEffect(() => {
		if (!first) return;

		async function delayedFlip(milliseconds: number) {
			await timeout(milliseconds);
			setFirst(null);
			setSecond(null);
		}

		if (first === second) {
			console.log("EQUAL");
			delayedFlip(250);
			return;
		} else if (first.element === second?.element) {
			const newActive = active.filter(
				(index) => index !== shuffledCards.indexOf(first) && index !== shuffledCards.indexOf(second)
			);
			setActive(newActive);
			delayedFlip(0);
			return;
		}

		if (first && second) delayedFlip(1500);
	}, [first, second]);

	return (
		<Screen>
			<CardsContainer dimension={dimension}>
				{shuffledCards.map((card, index) => (
					<LanguageCard
						key={`${card.element}-${card.id}`}
						onClick={() => handleClick(card)}
						isFlipped={card === first || card === second}
						isActive={active.includes(index)}>
						{card.element}
					</LanguageCard>
				))}
			</CardsContainer>
		</Screen>
	);
}
