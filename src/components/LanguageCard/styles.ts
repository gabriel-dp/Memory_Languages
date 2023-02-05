import styled, { css } from "styled-components";

interface ContainerProps {
	isFlipped: boolean;
	isActive: boolean;
}

const CardForm = css`
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	padding: 35%;

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

	background-color: #888;
`;

export const FrontCard = styled.div`
	${CardForm}
	transform: rotateY(180deg);

	background-color: #aaa;
`;
