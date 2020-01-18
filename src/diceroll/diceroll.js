const randomDiceRoll = () => {
	let rolls = [];
	let roll = 0;
	for (let i = 1; i <= 6; i++) {
		roll = Math.floor(Math.random() * 6) + 1;
		rolls.push(roll);
	}
	return rolls[Math.floor(Math.random() * 6)];
};

export default randomDiceRoll;
