import React, { Component } from 'react';
import Todo from './Todo/Todo';
import Daily from './Daily';
import Advice from './Advice';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<nav>
					<Link  to='/'>
						<img className='house' src={require(`./images/house.png`)} alt='' />
					</Link>
				</nav>
				<header className='homelnks'  >
					<Link exact to='/todo' >Todo</Link>
					<br></br>
					<Link exact to='/advice'>Advice</Link>
					<br></br>
					<Link to='/daily'>Daily</Link>
				</header>
				<main>
					<Route path='/todo' component={Todo} />
					{/* <Route path='/advice' component={Advice} /> */}
					{/* <Route path='/daily' component={Daily} /> */}
				</main>
			</div>
		);
	}
}

export default App;
