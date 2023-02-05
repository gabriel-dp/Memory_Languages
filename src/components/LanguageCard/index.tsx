import { CardContainer } from "./styles";

interface CardProps {
	children: React.ReactNode;
	onClick: () => void;
}

export default function LanguageCard(props: CardProps) {
	return <CardContainer onClick={props.onClick}>{props.children}</CardContainer>;
}
