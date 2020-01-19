import randomDiceRoll from '../../diceroll/diceroll';

const pickOff = () => {
	const result = randomDiceRoll();
	return `Pick Off Attempt! Catcher rolls a ${result}`;
};

export default pickOff;
