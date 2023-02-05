import { elementType, cardType } from "data/types";

const shuffle = (dimension: number, elements: elementType[]) => {
	const totalCards = dimension ** 2;
	const selectedOptions = elements.sort(() => Math.random() - 0.5).slice(0, totalCards / 2);
	const ObjectCards: cardType[] = selectedOptions.map((elem) => {
		const object: cardType = {
			element: elem,
			id: 0,
		};
		return object;
	});
	const ObjectCardsCopy: cardType[] = ObjectCards.map((object) => ({
		element: object.element,
		id: 1,
	}));
	const doubledOptions = ObjectCards.concat(ObjectCardsCopy);
	return doubledOptions.sort(() => Math.random() - 0.5);
};

export default shuffle;
