import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
	}
	componentDidMount = () => {
		const todos = localStorage.getItem('todos');
		if (todos) {
			const savedTodos = JSON.parse(todos);
			this.setState({ todos: savedTodos });
		}
	};
	AddTodo = (todo) => {
		this.setState({ todos: [todo, ...this.state.todos] });
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	};
	deleteItem = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => {
				return todo.id !== id;
			}),
		});

		localStorage.setItem('todos', JSON.stringify(this.state.todos));
		console.log(localStorage.getItem('todos'));
	};

	render() {
		return (
			<div>
				<AddTodo onSubmit={this.AddTodo} />
				{this.state.todos.map((todo) => (
					<TodoItem
						key={todo.id}
						text={todo.todoValue}
						deleteItem={() => this.deleteItem(todo.id)}
						todo={todo}
					/>
				))}
			</div>
		);
	}
}

export default Todo;
