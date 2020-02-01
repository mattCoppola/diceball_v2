import React from 'react';

import pitch from '../defense/pitcher/pitcher';
import fielder from '../defense/fielder/fielder';
import pickOff from '../defense/manager/pickoff';

class DefenseActions extends React.Component {
	constructor (props) {
		super(props);
		this.handlePitchAction = this.handlePitchAction.bind(this);
		this.handleFielderAction = this.handleFielderAction.bind(this);
		this.handlePickOffAction = this.handlePickOffAction.bind(this);
	}

	handlePitchAction () {
		let result = pitch();
		this.props.onDefenseAction(result);
	}

	handleFielderAction () {
		let result = fielder();
		this.props.onDefenseAction(result);
	}

	handlePickOffAction () {
		let result = pickOff();
		this.props.onDefenseAction(result);
	}

	render () {
		return (
			// <div className="ui column raised container">
			<div className="defense-actions">
				<h1>Defense Actions</h1>
				<div className="action-card">
					<button onClick={this.handlePitchAction} className="ui six wide column button">
						Pitch
					</button>
					<button onClick={this.handleFielderAction} className="ui six wide column button">
						Fielder
					</button>
					<button onClick={this.handlePickOffAction} className="ui six wide column button">
						Pick Off
					</button>
				</div>
			</div>
		);
	}
}

export default DefenseActions;
