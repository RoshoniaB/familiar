import React, { Component } from 'react';
import Todo from "./Todo"
import '../App.css';
class TodoItem extends Component {

	
	render() {
		const {text, deleteItem }= this.props
		
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div style={{ color: '#287CE1' }}>
					<input type='checkbox' />
					{text}
				</div>
				<main>
					<button onClick={deleteItem}>x</button>
				</main>
			</div>
		);
	}
}

export default TodoItem;
