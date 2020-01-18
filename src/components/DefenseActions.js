import React from 'react';

import pitch from '../pitcher/pitcher';

class DefenseActions extends React.Component {
	constructor (props) {
		super(props);
		this.handleDefenseAction = this.handleDefenseAction.bind(this);
	}

	handleDefenseAction () {
		let result = pitch();
		this.props.onDefenseAction(result);
	}

	render () {
		return (
			<div className="ui column raised container">
				<h1 className="ui header">Defense Actions</h1>
				<div className="ui grid">
					<button onClick={this.handleDefenseAction} className="ui six wide column button">
						Pitch
					</button>
					<button className="ui six wide column button">Fielder</button>
					<button className="ui six wide column button">Pick Off</button>
				</div>
			</div>
		);
	}
}

export default DefenseActions;
