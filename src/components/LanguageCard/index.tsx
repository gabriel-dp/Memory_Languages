import { useState } from "react";
import { BackCard, CardContainer, FrontCard } from "./styles";

interface CardProps {
	children: React.ReactNode;
	onClick: () => void;
	isFlipped: boolean;
	isActive: boolean;
}

export default function LanguageCard(props: CardProps) {
	return (
		<CardContainer onClick={() => props.onClick()} isFlipped={props.isFlipped} isActive={props.isActive}>
			<BackCard>?</BackCard>
			<FrontCard>{props.children}</FrontCard>
		</CardContainer>
	);
}
