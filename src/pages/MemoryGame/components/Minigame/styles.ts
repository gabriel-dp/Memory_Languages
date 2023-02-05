import styled from "styled-components";

interface ContainerProps {
	dimension: number;
}

export const CardsContainer = styled.div<ContainerProps>`
	width: max(min(100vh, 100%), 25rem);
	aspect-ratio: 1;
	padding: 2rem;

	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.dimension}, 1fr)`};
	gap: 2%;
`;
