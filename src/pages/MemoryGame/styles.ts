import styled from "styled-components";

export const Screen = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

interface ContainerProps {
	dimension: number;
}

export const CardsContainer = styled.div<ContainerProps>`
	width: max(min(100vh, 100%), 25rem);
	aspect-ratio: 1;
	padding: 1rem;

	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.dimension}, 1fr)`};
	gap: 2%;
`;
