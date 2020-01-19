import React from 'react';
import ReactDom from 'react-dom';

// Import Components
import DefenseActions from './components/DefenseActions';
import OffenseActions from './components/OffenseActions';
import UmpireActions from './components/UmpireActions';
import GameOutput from './components/GameOutput';
import GameStats from './components/GameStats';

import { umpIndicator, pitchCount } from './umpire/pitchLogic';

import './style.css';

class GameConsole extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			stats: {
				inning: 0,
				strikes: 0,
				balls: 0,
				outs: 0
			},
			output: [
				'Waiting on first pitch to begin the game...'
			]
		};

		this.handleDefenseAction = this.handleDefenseAction.bind(this);
		this.handleOffenseAction = this.handleOffenseAction.bind(this);
		this.handleUmpireAction = this.handleUmpireAction.bind(this);
	}

	handleDefenseAction (defenseAction) {
		let defense = '[ DEFENSE ] ';

		if (defenseAction.defenseType === 'fielder' || defenseAction.defenseType === 'pick-off') {
			this.setState((state) => {
				const output = [
					defense.concat(defenseAction.text),
					...state.output
				];
				return { output };
			});
		} else if (defenseAction.defenseType === 'pitcher') {
			this.setState((state) => {
				//
				let pitchResults = pitchCount(defenseAction.roll, this.state.stats);

				state.stats.balls = pitchResults.balls;
				state.stats.strikes = pitchResults.strikes;
				let pitchCall = pitchResults.pitchCall;

				const currentBatter = umpIndicator(this.state.stats);
				const batterReset = 'resetting balls and strikes based on umpIndicator...';

				if (currentBatter.walk || currentBatter.strikeout) {
					state.stats.balls = 0;
					state.stats.strikes = 0;
				}

				const output = [
					!currentBatter.text
						? defense.concat(defenseAction.text, ' >>> ', pitchCall)
						: defense.concat(
								defenseAction.text,
								' -- ',
								pitchCall,
								' -- ',
								currentBatter.text,
								' -- ',
								batterReset
							),
					...state.output
				];

				return { output };
			});
		}
	}

	handleOffenseAction (offenseAction) {
		let offense = '[ OFFENSE ] ';
		this.setState((state) => {
			const output = [
				offense.concat(offenseAction),
				...state.output
			];
			return { output };
		});
	}

	handleUmpireAction (umpireAction) {
		let umpire = '[ UMPIRE ] ';
		this.setState((state) => {
			const output = [
				umpire.concat(umpireAction.output),
				...state.output
			];
			if (umpireAction.inning) {
				state.stats.inning < 0 ? (state.stats.inning = 0) : (state.stats.inning += umpireAction.inning);
			} else if (umpireAction.out) {
				state.stats.outs < 0 ? (state.stats.outs = 0) : (state.stats.outs += umpireAction.out);
			}
			return { output };
		});
	}

	render () {
		return (
			<div>
				<div className="ui four column grid container segment">
					<OffenseActions onOffenseAction={this.handleOffenseAction} />
					<DefenseActions onDefenseAction={this.handleDefenseAction} />
					<UmpireActions onUmpireAction={this.handleUmpireAction} />
				</div>
				<div className="ui four column centered grid container segment">
					<GameOutput output={this.state.output} />
					<GameStats stats={this.state.stats} />
				</div>
			</div>
		);
	}
}

ReactDom.render(<GameConsole />, document.querySelector('#root'));
