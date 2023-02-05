import { difficulties } from "data/gameOptions";

import { Difficulties, OptionsContainer } from "./styles";

interface MenuProps {
	dimension: number;
	changeDimension: (newDimension: number) => void;
}

export default function GameMenu(props: MenuProps) {
	const dimensionChange = (e: any) => {
		props.changeDimension(parseInt(e.target.value, 10));
	};

	return (
		<OptionsContainer>
			<Difficulties>
				{Object.keys(difficulties).map((difficulty) => (
					<div key={difficulty}>
						<input
							type="radio"
							name="difficulty"
							checked={props.dimension === difficulties[difficulty]}
							value={difficulties[difficulty]}
							onChange={(e) => dimensionChange(e)}></input>
						<label htmlFor={difficulty}>{difficulty}</label>
					</div>
				))}
			</Difficulties>
		</OptionsContainer>
	);
}
