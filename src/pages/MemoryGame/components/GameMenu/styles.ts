import styled from "styled-components";

export const OptionsContainer = styled.div`
	width: 100%;
	height: 2rem;
	//background-color: red;

	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Difficulties = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;

	div {
		color: #fff;
		font-weight: bold;
		text-transform: capitalize;

		display: flex;
		gap: 0.5rem;
	}
`;
