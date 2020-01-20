import randomDiceRoll from '../diceroll/diceroll';

const hitAndRun = () => {
	let dice;
	dice = randomDiceRoll();
	if (dice === 1) {
		return `Hit & Run!  Roll >>> [${dice}] Strike!  Runners must advance.`;
	} else if (dice < 4) {
		return `Hit & Run!  Roll >>> [${dice}] Foul Ball!  Runners must return to base.`;
	} else {
		return `Hit & Run!  Roll >>> [${dice}] Hit!`;
	}
};

export default hitAndRun;
