import randomDiceRoll from '../../diceroll/diceroll';

const pickOff = () => {
	const roll = randomDiceRoll();
	const result = {
		defenseType: 'pick-off',
		text: `Pick Off Attempt! Catcher rolls >>> [${roll}]`,
		roll: roll
	};
	return result;
};

export default pickOff;
