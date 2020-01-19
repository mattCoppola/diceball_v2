import randomDiceRoll from '../../diceroll/diceroll';

const pitch = () => {
	const roll = randomDiceRoll();
	const result = {
		defenseType: 'pitcher',
		text: `Pitcher throws >>> [${roll}]`,
		roll: roll
	};
	return result;
};

export default pitch;
