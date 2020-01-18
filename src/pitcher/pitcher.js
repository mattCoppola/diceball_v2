import randomDiceRoll from '../diceroll/diceroll';

const pitch = () => {
	const result = randomDiceRoll();
	return `Pitcher throws a ${result}`;
};

export default pitch;
