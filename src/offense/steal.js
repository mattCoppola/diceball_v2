import randomDiceRoll from '../diceroll/diceroll';

const baseSteal = () => {
	let dice = [];
	for (let i = 1; i <= 2; i++) {
		dice.push(randomDiceRoll());
	}
	// console.log(`Steal Attempt! [${dice}]`);
	// console.log("You rolled: ", dice.reduce((a,b) => a + b));

	return `Steal Attempt! >>> [${dice}], Total: ${dice.reduce((a, b) => a + b)}`;
};

export default baseSteal;
