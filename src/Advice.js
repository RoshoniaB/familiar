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
				<h1 className="advicehead" >
					{this.state.slip.advice} 
				</h1>
			</main>
		);
	}
}

export default Advice;
