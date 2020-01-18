import React from 'react';
import ReactDom from 'react-dom';

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

class GameOutput extends React.Component {
	render () {
		const output = this.props.output;

		return (
			<div className="ui column raised container">
				<h1 className="ui header">Game Output</h1>
				<p className="game-output">{output}</p>
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

class DefenseActions extends React.Component {
	render () {
		return (
			<div className="ui column raised container">
				<h1 className="ui header">Defense Actions</h1>
				<div className="ui grid">
					<button className="ui six wide column button">Pitch</button>
					<button className="ui six wide column button">Fielder</button>
					<button className="ui six wide column button">Pick Off</button>
				</div>
			</div>
		);
	}
}

class OffenseActions extends React.Component {
	render () {
		return (
			<div className="ui column raised container">
				<h1 className="ui header">Offense Actions</h1>
				<div className="ui grid">
					<button className="ui six wide column button">Hit</button>
					<button className="ui six wide column button">Runner</button>
					<button className="ui six wide column button">Steal</button>
					<button className="ui six wide column button">Hit&Run</button>
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
			output: 'It is a hit!!!!!!!!'
		};
	}

	render () {
		return (
			<div>
				<div className="ui four column grid container segment">
					<OffenseActions />
					<DefenseActions />
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
