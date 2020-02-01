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
			inning = `  Top of ${stats.inning + 0.5}`;
		} else {
			inning = `  Bottom of ${stats.inning}`;
		}

		return (
			// <div className="ui column raised container">
			<div className="gamestats">
				<h1>Game Stats</h1>
				<div className="game-stats">
					<p>
						<b>Inning:</b>
					</p>
					<p>{inning}</p>
					<p>
						<b>Strikes:</b> {stats.strikes}
					</p>
					<p>
						<b>Balls:</b> {stats.balls}
					</p>
					<p>
						<b>Outs:</b> {stats.outs <= 0 ? 0 : stats.outs}
					</p>
				</div>
			</div>
		);
	}
}

export default GameStats;
