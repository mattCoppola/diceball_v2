import randomDiceRoll from '../../diceroll/diceroll';

const pickOff = () => {
	const roll = randomDiceRoll();
	const result = {
		defenseType: 'pick-off',
		text: `Pick Off Attempt! Catcher rolls a ${roll}`,
		roll: roll
	};
	return result;
};

export default pickOff;
