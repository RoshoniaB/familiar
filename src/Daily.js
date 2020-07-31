// import React, { Component } from 'react';
// import App from './App';

// class Daily extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			affirmation: [],
// 		};
// 	}

// 	componentDidMount() {
// 		const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// 		const url = `https://www.affirmations.dev`;
// 		fetch(proxyUrl + url)
// 			.then((res) => res.json())
// 			.then((res) => {
// 				this.setState({ affirmation: res.affirmation });
// 				// console.log(res.affirmation);
// 			})
// 			.catch((err) => {
// 				console.error(err);
// 			});
// 	}

// 	render() {
// 		return <main>{<h1>{this.state.affirmation}!</h1>}</main>;
// 	}
// }

// export default Daily;
//////////////////////////////////////////////
// Where I found this proxyurl from -- https://stackoverflow.com/questions/43871637no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
//////////////////////////////////////////////////