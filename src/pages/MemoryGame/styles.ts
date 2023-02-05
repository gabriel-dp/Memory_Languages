import styled from "styled-components";

export const ScreenWrapper = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(135deg, #0950cd, #04165d);

	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const GameContainer = styled.div`
	height: 100%;
	max-width: 100%;
	aspect-ratio: 1;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
