import randomDiceRoll from '../../diceroll/diceroll';

// fielder rolls die for strength of throw towards a base

const fielder = () => {
	const result = randomDiceRoll();
	return `Fielder throws a ${result}`;
};

export default fielder;
