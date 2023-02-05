import { useState } from "react";

import Minigame from "./components/Minigame";
import GameMenu from "./components/GameMenu";
import { difficulties } from "data/gameOptions";
import gameElements from "data/gameElements";

import { ScreenWrapper, GameContainer } from "./styles";

export default function MemoryGame() {
	const [dimension, setDimension] = useState(difficulties.hard);

	const changeDimension = (newDimension: number) => {
		setDimension(newDimension);
	};

	return (
		<ScreenWrapper>
			<GameContainer>
				<GameMenu dimension={dimension} changeDimension={changeDimension}></GameMenu>
				<Minigame dimension={dimension} gameElements={gameElements} />
			</GameContainer>
		</ScreenWrapper>
	);
}
