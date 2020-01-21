import React from 'react';

class GameOutput extends React.Component {
	render () {
		let counter = -1;
		// const output = this.props.output.map((action) => <p key={`action-${counter++}`}>{action}</p>);
		const output = this.props.output.map((action) => {
			if (action.includes('DEFENSE')) {
				return (
					<p key={`action-${counter++}`}>
						<span className="defense">{action}</span>
					</p>
				);
			} else if (action.includes('OFFENSE')) {
				return (
					<p key={`action-${counter++}`}>
						<span className="offense">{action}</span>
					</p>
				);
			} else {
				return (
					<p key={`action-${counter++}`}>
						<span className="umpire">{action}</span>
					</p>
				);
			}
		});

		return (
			<div className="ui column raised container">
				<h1 className="ui header">Game Output</h1>
				<div className="game-output">{output}</div>
			</div>
		);
	}
}

export default GameOutput;
