import React, { Component } from 'react';
// import App from "../App"
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			completed: true,
		};
	}
	componentDidMount = () => {
		const todos = localStorage.getItem('todos');
		if (todos) {
			const savedTodos = JSON.parse(todos);
			this.setState({ todos: savedTodos });
		} else {
			console.log('No todos');
		}
	};
	AddTodo = (todo) => {
		this.setState({ todos: [todo,...this.state.todos] });
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
		console.log(localStorage.getItem('todos'));
    };
    deleteItem = (todoValue) => {
        this.setState ({
            todos: this.state.todos.filter(todo => {
                return todo.todoValue!== todoValue
            })
        })
        localStorage.removeItem('todoValue')
    }


	render() {
		return (
			<div>
				<AddTodo onSubmit={this.AddTodo} />
				{this.state.todos.map(todo =>(
                    <TodoItem key={todo.todoValue} text={todo.todoValue} 
                        deleteItem={() => this.deleteItem(todo.todoValue)}
                        todo={todo}
                    />
                ))}
			</div>
		);
	}
}

export default Todo;
