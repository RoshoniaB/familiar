import React, { Component } from 'react';

class AddTodo extends Component {
	constructor() {
		super();
		this.state = {
			todoValue: '',
		};
	}

	inputHandler = (e) => {
		this.setState({ todoValue: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
            todoValue: this.state.todoValue,
            complete: false,
            id: this.state.todoValue
        })
        this.setState({
            todoValue: ' '
        })
		
    };
    

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						style={{ flex: '10', padding: '5px' }}
						onChange={this.inputHandler}
						value={this.state.todoValue}
					/>
					<button onClick={this.handleSubmit}>add todo</button>
				</form>
				<main></main>
			</div>
		);
	}
}

export default AddTodo;
