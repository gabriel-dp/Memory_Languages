import styled from "styled-components";

interface ContainerProps {
	dimension: number;
}

export const ScreenWrapper = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(135deg, #0950cd, #04165d);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const CardsContainer = styled.div<ContainerProps>`
	width: max(min(100vh, 100%), 25rem);
	aspect-ratio: 1;
	padding: 2rem;

	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.dimension}, 1fr)`};
	gap: 2%;
`;
