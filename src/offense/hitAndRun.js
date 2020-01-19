import randomDiceRoll from '../diceroll/diceroll';

const hitAndRun = () => {
	let dice;
	dice = randomDiceRoll();
	if (dice === 1) {
		return `[${dice}] Strike!  Runners must advance.`;
	} else if (dice < 4) {
		return `[${dice}] Foul Ball!  Runners must return to base.`;
	} else {
		return `[${dice}] Hit!`;
	}
};

export default hitAndRun;
