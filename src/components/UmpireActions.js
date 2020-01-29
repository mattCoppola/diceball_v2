import React from 'react';

import randomDiceRoll from '../diceroll/diceroll';

class UmpireActions extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddInningAction = this.handleAddInningAction.bind(this);
		this.handleSubtractInningAction = this.handleSubtractInningAction.bind(this);
		this.handleAddOutAction = this.handleAddOutAction.bind(this);
		this.handleSubtractOutAction = this.handleSubtractOutAction.bind(this);
		this.handleDiceRollAction = this.handleDiceRollAction.bind(this);
		this.handleInningResetAction = this.handleInningResetAction.bind(this);
		this.handleAddStrikeAction = this.handleAddStrikeAction.bind(this);
		this.handleSubtractStrikeAction = this.handleSubtractStrikeAction.bind(this);
	}

	handleAddInningAction () {
		let result = { output: 'Half Inning Added.', inning: 0.5 };
		this.props.onUmpireAction(result);
	}

	handleSubtractInningAction () {
		let result = { output: 'Half Inning Subtracted.', inning: -0.5 };
		this.props.onUmpireAction(result);
	}

	handleAddOutAction () {
		let result = { output: 'Out added.', out: 1 };
		this.props.onUmpireAction(result);
	}

	handleSubtractOutAction () {
		let result = { output: 'Out Subtracted.', out: -1 };
		this.props.onUmpireAction(result);
	}

	handleAddStrikeAction () {
		let result = { output: 'Strike Added', strike: 1 };
		this.props.onUmpireAction(result);
	}

	handleSubtractStrikeAction () {
		let result = { output: 'Strike Subtracted', strike: -1 };
		this.props.onUmpireAction(result);
	}

	handleDiceRollAction () {
		let result = { output: `Umpire Rolls a ${randomDiceRoll()}` };
		this.props.onUmpireAction(result);
	}

	handleInningResetAction () {
		let result = { output: 'Resetting Inning', resetInning: true };
		this.props.onUmpireAction(result);
	}

	render () {
		return (
			<div className="ui column raised container">
				<h1 className="ui header">Umpire Actions</h1>
				<div className="ui grid">
					<button onClick={this.handleAddInningAction} className="ui six wide column button">
						+ Inning
					</button>
					<button onClick={this.handleSubtractInningAction} className="ui six wide column button">
						- Inning
					</button>
					<button onClick={this.handleAddOutAction} className="ui six wide column button">
						+ Out
					</button>
					<button onClick={this.handleSubtractOutAction} className="ui six wide column button">
						- Out
					</button>
					<button onClick={this.handleAddStrikeAction} className="ui six wide column button">
						+ Strike
					</button>
					<button onClick={this.handleSubtractStrikeAction} className="ui six wide column button">
						- Strike
					</button>
					<button onClick={this.handleDiceRollAction} className="ui six wide column button">
						Dice Roll
					</button>
					<button onClick={this.handleInningResetAction} className="ui six wide column button">
						Reset Inning
					</button>
				</div>
			</div>
		);
	}
}

export default UmpireActions;
