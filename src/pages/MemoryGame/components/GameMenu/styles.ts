import styled from "styled-components";

export const OptionsContainer = styled.div`
	width: 100%;
	height: 2rem;
	//background-color: red;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
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

export const MenuButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;

	font-size: 1rem;
	color: #fff;
	padding: 0.25rem 0;

	:hover {
		text-decoration: underline;
	}
`;
