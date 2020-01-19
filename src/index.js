import React from 'react';
import ReactDom from 'react-dom';

// Import Components
import DefenseActions from './components/DefenseActions';
import OffenseActions from './components/OffenseActions';
import GameOutput from './components/GameOutput';

import './style.css';

class GameStats extends React.Component {
	render () {
		const stats = this.props.stats;

		return (
			<div className="ui column raised container">
				<h1 className="ui header">Game Stats</h1>
				<p>Inning: {stats.inning}</p>
				<p>Strikes: {stats.strikes}</p>
				<p>Balls: {stats.balls}</p>
				<p>Outs: {stats.outs}</p>
			</div>
		);
	}
}

class UmpireActions extends React.Component {
	render () {
		return (
			<div className="ui column raised container">
				<h1 className="ui header">Umpire Actions</h1>
				<div className="ui grid">
					<button className="ui six wide column button">+ Inning</button>
					<button className="ui six wide column button">- Inning</button>
					<button className="ui six wide column button">+ Out</button>
					<button className="ui six wide column button">- Out</button>
					<button className="ui six wide column button">Dice Roll</button>
					<button className="ui six wide column button">Reset Inning</button>
				</div>
			</div>
		);
	}
}

class GameConsole extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			stats: {
				inning: 8,
				strikes: 2,
				balls: 3,
				outs: 2
			},
			output: [
				'Waiting on first pitch to begin the game...'
			]
		};

		this.handleDefenseAction = this.handleDefenseAction.bind(this);
		this.handleOffenseAction = this.handleOffenseAction.bind(this);
	}

	handleDefenseAction (defenseAction) {
		let defense = '[DEF >>> ] ';
		this.setState((state) => {
			const output = [
				defense.concat(defenseAction),
				...state.output
			];
			return { output };
		});
	}

	handleOffenseAction (offenseAction) {
		let offense = '[OFF >>> ] ';
		this.setState((state) => {
			const output = [
				offense.concat(offenseAction),
				...state.output
			];
			return { output };
		});
	}

	render () {
		return (
			<div>
				<div className="ui four column grid container segment">
					<OffenseActions onOffenseAction={this.handleOffenseAction} />
					<DefenseActions onDefenseAction={this.handleDefenseAction} />
					<UmpireActions />
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
