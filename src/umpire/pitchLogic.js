export const umpIndicator = (gameStats) => {
	const { balls, strikes, outs } = gameStats;
	const update = {
		text: '',
		walk: false,
		strikeout: false
	};

	if (balls === 4) {
		update.text = '4 balls -- Take your base!';
		update.walk = true;
		return update;
	} else if (strikes === 3) {
		update.text = '3 strikes - You are out!';
		update.strikeout = true;
		return update;
	} else return update;
};

export const pitchCount = (pitch, gameStats) => {
	// need access to defenseAction.roll to determine pitch
	// need if statementst to determine pitchCount status and text

	const update = {
		balls: gameStats.balls,
		strikes: gameStats.strikes,
		pitchCall: ''
	};

	if (pitch === 6) {
		update.balls = 0;
		update.strikes = 0;
		update.pitchCall = 'Hit! Resetting balls and strikes.';
		return update;
	} else if (pitch < 6 && pitch > 3) {
		update.balls += 1;
		update.pitchCall = 'Ball!';
		return update;
	} else if (pitch < 4 && pitch > 1 && update.strikes !== 2) {
		update.strikes += 1;
		update.pitchCall = 'Foul Ball!';
		return update;
	} else if (pitch < 4 && pitch > 1) {
		update.pitchCall = 'Foul Ball!';
		return update;
	} else if (pitch === 1) {
		update.strikes += 1;
		update.pitchCall = 'Strike!';
		return update;
	}
};
