import React from 'react';

class GameOutput extends React.Component {
	render () {
		const output = this.props.output.map((action) => <p key={Math.random()}>{action}</p>);

		return (
			<div className="ui column raised container">
				<h1 className="ui header">Game Output</h1>
				<div className="game-output">{output}</div>
			</div>
		);
	}
}

export default GameOutput;
