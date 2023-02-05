import { useMemo } from "react";

import SvgIcon from "../SvgIcon";
import { ReactComponent as QuestionMark } from "../../assets/question-mark.svg";

import { BackCard, CardContainer, FrontCard } from "./styles";

interface CardProps {
	name: string;
	onClick: () => void;
	isFlipped: boolean;
	isActive: boolean;
}

export default function LanguageCard(props: CardProps) {
	const Icon = useMemo(() => <SvgIcon name={props.name} />, [props.name]);

	return (
		<CardContainer onClick={() => props.onClick()} isFlipped={props.isFlipped} isActive={props.isActive}>
			<BackCard>
				<QuestionMark />
			</BackCard>
			<FrontCard>{Icon}</FrontCard>
		</CardContainer>
	);
}
