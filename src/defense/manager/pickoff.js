import randomDiceRoll from '../../diceroll/diceroll';

const pickOff = () => {
	const result = randomDiceRoll();
	return `Pick Off Attempt! You rolled a ${result}`;
};

export default pickOff;
