import React, { Component } from 'react';
import AddTodo from './AddTodo';
import '../App.css';
class TodoItem extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { todos } = this.props;
		// console.log(todos)
		return (
			<div>
				{todos.map((todos) => {
					return (
						<ol>
							<input type='checkbox' />
							{todos}
						</ol>
					);
				})}
			</div>
		);
	}
}

export default TodoItem;
