import React, { Component } from 'react';
import shortid from 'shortid';

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
			id: shortid.generate(),
		});
		this.setState({
			todoValue: ' ',
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						className='todoForm'
						onChange={this.inputHandler}
						value={this.state.todoValue}
					/>
					<button className='btn' onClick={this.handleSubmit}>
						Add todo
					</button>
				</form>
			</div>
		);
	}
}


export default AddTodo;
