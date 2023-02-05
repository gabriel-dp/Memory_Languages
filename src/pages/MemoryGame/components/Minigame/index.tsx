import { useState, useMemo, useEffect } from "react";

import LanguageCard from "components/LanguageCard";
import { cardType, elementType } from "data/types";
import shuffle from "./utils/shuffleCards";
import timeout from "./utils/timeout";

import { CardsContainer } from "./styles";

interface MinigameProps {
	dimension: number;
	gameElements: elementType[];
}

export default function Minigame(props: MinigameProps) {
	const [first, setFirst] = useState<cardType | null>(null);
	const [second, setSecond] = useState<cardType | null>(null);
	const [active, setActive] = useState<number[]>(Array.from({ length: props.dimension ** 2 }, (_, i) => i));

	const shuffledCards = useMemo<cardType[]>(
		() => shuffle(props.dimension, props.gameElements),
		[props.dimension, props.gameElements]
	);

	const handleClick = (card: cardType) => {
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
			delayedFlip(100);
			return;
		} else if (first.element === second?.element) {
			const newActive = active.filter(
				(index) => index !== shuffledCards.indexOf(first) && index !== shuffledCards.indexOf(second)
			);
			setActive(newActive);
			delayedFlip(100);
			return;
		}

		if (first && second) delayedFlip(1500);
	}, [first, second]);

	return (
		<CardsContainer dimension={props.dimension}>
			{shuffledCards.map((card, index) => (
				<LanguageCard
					key={`${card.element}-${card.id}`}
					onClick={() => handleClick(card)}
					isFlipped={card === first || card === second}
					isActive={active.includes(index)}
					name={card.element.toString()}
				/>
			))}
		</CardsContainer>
	);
}
