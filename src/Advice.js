import React, { Component } from 'react';

class Advice extends Component {
	constructor() {
		super();
		this.state = {
			slip: [],
		};
	}

	componentDidMount() {
		const url = 'https://api.adviceslip.com/advice';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ slip: res.slip });
			});
	}


	render() {
		return (
			<main>
				<button onClick={this.state.slip.advice} style={{ color: '#6b615a', textAlign: 'center' }}>
					Need Advice
				</button>
			</main>
		);
	}
}

export default Advice;
