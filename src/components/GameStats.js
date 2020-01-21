import React from 'react';

class GameStats extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	render () {
		const stats = this.props.stats;
		let inning = '';
		if (stats.inning <= 0) {
			inning = 'Inning:  Waiting for First Pitch';
		} else if (!Number.isInteger(stats.inning)) {
			inning = `Inning: Top of ${stats.inning + 0.5}`;
		} else {
			inning = `Inning: Bottom of ${stats.inning}`;
		}

		return (
			<div className="ui column raised container">
				<h1 className="ui header">Game Stats</h1>
				<div className="game-stats">
					<p>{inning}</p>
					<p>Strikes: {stats.strikes}</p>
					<p>Balls: {stats.balls}</p>
					<p>Outs: {stats.outs <= 0 ? 0 : stats.outs}</p>
				</div>
			</div>
		);
	}
}

export default GameStats;
