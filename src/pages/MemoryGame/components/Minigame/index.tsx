import { useRef, useState, useEffect } from "react";

import LanguageCard from "components/LanguageCard";
import { cardType, elementType } from "data/types";
import shuffle from "./utils/shuffleCards";
import timeout from "./utils/timeout";

import { CardsContainer } from "./styles";

interface MinigameProps {
	dimension: number;
	gameElements: elementType[];
	isPlaying: (state: boolean, reset?: boolean) => void;
}

export default function Minigame(props: MinigameProps) {
	const started = useRef(false);
	const [first, setFirst] = useState<cardType | null>(null);
	const [second, setSecond] = useState<cardType | null>(null);
	const [solved, setSolved] = useState<number[]>([]);
	const [shuffledCards, setShuffledCards] = useState<cardType[]>([]);

	// Resets all states when game is reloaded
	useEffect(() => {
		props.isPlaying(false, true);
		started.current = false;

		setFirst(null);
		setSecond(null);
		setSolved([]);
		setShuffledCards(shuffle(props.dimension, props.gameElements));
	}, [props.dimension, props.gameElements]);

	const handleClick = (card: cardType) => {
		// Timer starts when user clicks in a card
		if (!started.current) {
			props.isPlaying(true);
			started.current = true;
		}

		// Enable click in only two cards by play, avoiding many flipped cards
		if (!first) {
			setFirst(card);
		} else if (!second) {
			setSecond(card);
		}
	};

	// Checks the card combination results
	useEffect(() => {
		if (!first || !second) return;

		// Unflips both cards after a delay
		async function delayedUnflip(milliseconds: number) {
			await timeout(milliseconds);
			setFirst(null);
			setSecond(null);
		}

		// User clicked in the same card twice or found the matching cards
		if (first.element === second.element) {
			if (first.id !== second.id) {
				// Found the matching cards
				const recentSolved = [shuffledCards.indexOf(first), shuffledCards.indexOf(second)];
				setSolved(solved.concat(recentSolved));
			}
			// Small delay to unflip the cards before new selection
			delayedUnflip(50);
			return;
		}

		// Delay in wrong combination must be higher
		if (first && second) delayedUnflip(1100);
	}, [first, second]);

	// Controls the end of the game
	useEffect(() => {
		if (solved.length === props.dimension ** 2) {
			props.isPlaying(false);
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
