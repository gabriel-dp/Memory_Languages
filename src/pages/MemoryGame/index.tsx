import { useEffect, useState } from "react";

import Minigame from "./components/Minigame";
import GameMenu from "./components/GameMenu";
import { difficulties } from "data/gameOptions";
import gameElements from "data/gameElements";

import { ScreenWrapper, GameContainer } from "./styles";

export default function MemoryGame() {
	const [dimension, setDimension] = useState(difficulties.easy);
	const changeDimension = (newDimension: number) => setDimension(newDimension);

	const [time, setTime] = useState(0);
	const [playing, setPlaying] = useState(false);

	const isPlaying = (state: boolean, reset?: boolean) => {
		if (state || reset) setTime(0);
		setPlaying(state);
	};

	// Controls game time, counting the seconds
	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;
		if (playing) {
			interval = setInterval(() => {
				setTime((time) => time + 1);
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [playing]);

	// Reset function is made of a empty object that is reloaded and forces <Minigame /> to rerender
	const [reset, setState] = useState({});
	const resetGame = () => setState({ ...reset });

	return (
		<ScreenWrapper>
			<GameContainer>
				<GameMenu dimension={dimension} changeDimension={changeDimension} time={time} resetGame={resetGame} />
				<Minigame dimension={dimension} gameElements={gameElements} isPlaying={isPlaying} reset={reset} />
			</GameContainer>
		</ScreenWrapper>
	);
}
