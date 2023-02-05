import Minigame from "./components/Minigame";
import { modes } from "data/gameOptions";
import gameElements from "data/gameElements";

import { ScreenWrapper } from "./styles";

export default function MemoryGame() {
	return (
		<ScreenWrapper>
			<Minigame dimension={modes.easy} gameElements={gameElements} />
		</ScreenWrapper>
	);
}
