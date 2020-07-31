import React, { Component } from 'react';
// import App from "../App"
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class Todo extends Component {
    constructor(){
        super ()
        this.state={
            todos:[]
        }
    }
    componentDidMount = () => {
        const todos = localStorage.getItem('todos')
        if(todos){
            const savedTodos = JSON.parse(todos)
            this.setState({todos:savedTodos}) 
        }else {
            console.log('No todos')
        }
    }
    AddTodo= (todo) => {
        this.setState({ todos: [...this.state.todos, todo] });
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
        console.log(localStorage.getItem('todos'))

    }

    render() {

        return (
            <div>
                <AddTodo addFunc={this.AddTodo}/>
                <TodoItem todos={this.state.todos}/>
            </div>
        );
    }
}

export default Todo;