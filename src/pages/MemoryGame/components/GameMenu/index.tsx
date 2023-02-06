import { difficulties } from "data/gameOptions";
import Timer from "components/Timer";

import { Difficulties, MenuButton, OptionsContainer } from "./styles";

interface MenuProps {
	dimension: number;
	changeDimension: (newDimension: number) => void;
	time: number;
	resetGame: () => void;
}

export default function GameMenu(props: MenuProps) {
	const dimensionChange = (e: any) => {
		props.changeDimension(parseInt(e.target.value, 10));
	};

	return (
		<OptionsContainer>
			<MenuButton onClick={() => props.resetGame()}>Reset</MenuButton>
			<Difficulties>
				{Object.keys(difficulties).map((difficulty) => (
					<div key={difficulty}>
						<input
							type="radio"
							id={difficulty}
							name="difficulty"
							checked={props.dimension === difficulties[difficulty]}
							value={difficulties[difficulty]}
							onChange={(e) => dimensionChange(e)}></input>
						<label htmlFor={difficulty}>{difficulty}</label>
					</div>
				))}
			</Difficulties>
			<Timer time={props.time} />
		</OptionsContainer>
	);
}
