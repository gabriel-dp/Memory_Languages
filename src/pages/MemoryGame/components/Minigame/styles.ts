import styled from "styled-components";

interface ContainerProps {
	dimension: number;
}

export const CardsContainer = styled.div<ContainerProps>`
	width: 100%;
	aspect-ratio: 1;

	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.dimension}, 1fr)`};
	gap: 2%;
`;
