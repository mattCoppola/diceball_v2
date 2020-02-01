import React from 'react';

import hit from '../offense/hit';
import runner from '../offense/runner';
import baseSteal from '../offense/steal';
import hitAndRun from '../offense/hitAndRun';

class OffenseActions extends React.Component {
	constructor (props) {
		super(props);
		this.handleHitAction = this.handleHitAction.bind(this);
		this.handleRunnerAction = this.handleRunnerAction.bind(this);
		this.handleStealAction = this.handleStealAction.bind(this);
		this.handleHitAndRunAction = this.handleHitAndRunAction.bind(this);
	}

	handleHitAction () {
		let result = hit();
		this.props.onOffenseAction(result);
	}

	handleRunnerAction () {
		let result = runner();
		this.props.onOffenseAction(result);
	}

	handleStealAction () {
		let result = baseSteal();
		this.props.onOffenseAction(result);
	}

	handleHitAndRunAction () {
		let result = hitAndRun();
		this.props.onOffenseAction(result);
	}

	render () {
		return (
			// <div className="ui column raised container">
			<div className="offense-actions">
				<h1>Offense Actions</h1>
				<div className="action-card">
					<button onClick={this.handleHitAction} className="ui six wide column button">
						Hit
					</button>
					<button onClick={this.handleRunnerAction} className="ui six wide column button">
						Runner
					</button>
					<button onClick={this.handleStealAction} className="ui six wide column button">
						Steal
					</button>
					<button onClick={this.handleHitAndRunAction} className="ui six wide column button">
						Hit & Run
					</button>
				</div>
			</div>
		);
	}
}

export default OffenseActions;
