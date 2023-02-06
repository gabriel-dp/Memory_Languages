import { useState, useMemo, useEffect, useRef } from "react";

import LanguageCard from "components/LanguageCard";
import { cardType, elementType } from "data/types";
import shuffle from "./utils/shuffleCards";
import timeout from "./utils/timeout";

import { CardsContainer } from "./styles";

interface MinigameProps {
	dimension: number;
	gameElements: elementType[];
	isPlaying: (state: boolean) => void;
}

export default function Minigame(props: MinigameProps) {
	const started = useRef(false);
	const [first, setFirst] = useState<cardType | null>(null);
	const [second, setSecond] = useState<cardType | null>(null);
	const [solved, setSolved] = useState<number[]>([]);

	useEffect(() => {
		props.isPlaying(false);
		started.current = false;

		setFirst(null);
		setSecond(null);
		setSolved([]);
	}, [props.dimension]);

	const shuffledCards = useMemo<cardType[]>(() => {
		return shuffle(props.dimension, props.gameElements);
	}, [props.dimension, props.gameElements]);

	const handleClick = (card: cardType) => {
		if (!started.current) {
			props.isPlaying(true);
			started.current = true;
		}

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
			delayedFlip(50);
			return;
		} else if (first.element === second?.element) {
			const recentSolved = [shuffledCards.indexOf(first), shuffledCards.indexOf(second)];
			setSolved(solved.concat(recentSolved));
			delayedFlip(50);
			return;
		}

		if (first && second) delayedFlip(1100);
	}, [first, second]);

	useEffect(() => {
		if (solved.length === props.dimension ** 2) {
			props.isPlaying(false);
			started.current = false;
		}
	}, [solved]);

	return (
		<CardsContainer dimension={props.dimension}>
			{shuffledCards.map((card, index) => (
				<LanguageCard
					key={`${card.element}-${index}-${props.dimension}`}
					onClick={() => handleClick(card)}
					isFlipped={card === first || card === second}
					isActive={!solved.includes(index)}
					name={card.element.toString()}
				/>
			))}
		</CardsContainer>
	);
}
