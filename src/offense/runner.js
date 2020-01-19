import randomDiceRoll from '../diceroll/diceroll';

// runner rolls die for strength of run towards a base
const runner = () => {
	let die = randomDiceRoll();
	return `Runner rolls >>> [${die}]`;
};

export default runner;
