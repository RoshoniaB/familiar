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
		this.props.addFunc(this.state.todoValue);
		
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						style={{ flex: '10', padding: '5px' }}
						onChange={this.inputHandler}
					/>
					<input type='submit' value='Submit' className='btn' />
				</form>
				<main></main>
			</div>
		);
	}
}

export default AddTodo;
