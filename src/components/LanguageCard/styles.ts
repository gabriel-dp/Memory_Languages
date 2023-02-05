import styled, { css } from "styled-components";

interface ContainerProps {
	isFlipped: boolean;
	isActive: boolean;
}

const CardForm = css`
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CardContainer = styled.div<ContainerProps>`
	${CardForm}

	transform: rotateY(${(props) => (props.isFlipped || !props.isActive ? "180deg" : "0deg")});
	transform-style: preserve-3d;
	transition: transform 0.8s ease;
	position: relative;
	cursor: ${(props) => (props.isActive ? "pointer" : "normal")};

	div {
		backface-visibility: hidden;
		position: absolute;
		filter: grayscale(${(props) => (props.isActive ? 0 : 0.5)});
		opacity: ${(props) => (props.isActive ? 1 : 0.5)};
		transition: all 1s;
	}
`;

export const BackCard = styled.div`
	${CardForm}
	transform: rotateY(0deg);
	z-index: 2;
	padding: 35%;

	background: linear-gradient(135deg, #878f9c, #878f9c);
	border: 1px solid #ffffff55;
`;

export const FrontCard = styled.div`
	${CardForm}
	transform: rotateY(180deg);
	padding: 30%;
	overflow: hidden;

	background: linear-gradient(135deg, #cccccccc, #ffffffcc);
	border: 1px solid #ffffffaa;
`;
