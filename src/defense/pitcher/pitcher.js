import randomDiceRoll from '../../diceroll/diceroll';

const pitch = () => {
	const roll = randomDiceRoll();
	const result = {
		text: `Pitcher throws a ${roll}`,
		roll: roll
	};
	return result;
};

export default pitch;
