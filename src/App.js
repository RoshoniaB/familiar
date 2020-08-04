import React, { Component } from 'react';
import Todo from './Todo/Todo';
import Daily from './Daily';
import Advice from './Advice';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Todo/Home';

class App extends Component {
	render() {
		return (
			<div>
				<header className='header'>
					<Link exact to='/' >
						<img className='house' src={require(`./images/house.png`)} alt='' />
					</Link>
					<h1
						style={{
							color: '#B9CBD9',
							textAlign: 'center',
							fontSize: '60px ',
						}}>
						Familiar
					</h1>
					<Link exact to='/todo' className='homelnks'>
						Todo
					</Link>

					<Link to='/advice' className='homelnks'>
						Advice
					</Link>

					<Link to='/daily' className='homelnks'>
						Daily
					</Link>
				</header>

				<main className='container'>
					<Route exact path='/' component={Home}/>
					<Route path='/advice' component={Advice} />
					<Route path='/daily' component={Daily} />
					<Route path='/todo' component={Todo} />
				</main>
				<body>
					
				</body>
			</div>
		);
	}
}

export default App;
