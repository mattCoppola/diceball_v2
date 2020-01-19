import randomDiceRoll from '../../diceroll/diceroll';

// fielder rolls die for strength of throw towards a base

const fielder = () => {
	const roll = randomDiceRoll();
	const result = {
		defenseType: 'fielder',
		text: `Fielder rolls >>> [${roll}]`,
		roll: roll
	};
	return result;
};

export default fielder;
