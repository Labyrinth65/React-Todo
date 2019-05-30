import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			toDosArray: [
				{
					task: "Organize Garage",
					id: 1528817077286,
					completed: false
				},
				{
					task: "Bake Cookies",
					id: 1528817084358,
					completed: false
				}
			],
			newTodoField: ""
		};
	}

	componentDidMount() {
		this.hydrateStateWithLocalStorage();

		// add event listener to save state to localStorage
		// when user leaves/refreshes the page
		window.addEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		);
	}

	componentWillUnmount() {
		window.removeEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		);

		// saves if component has a chance to unmount
		this.saveStateToLocalStorage();
	}

	hydrateStateWithLocalStorage() {
		// for all items in state
		for (let key in this.state) {
			// if the key exists in localStorage
			if (localStorage.hasOwnProperty(key)) {
				// get the key's value from localStorage
				let value = localStorage.getItem(key);

				// parse the localStorage string and setState
				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					// handle empty string
					this.setState({ [key]: value });
				}
			}
		}
	}

	saveStateToLocalStorage() {
		// for every item in React state
		for (let key in this.state) {
			// save to localStorage
			localStorage.setItem(key, JSON.stringify(this.state[key]));
		}
	}

	formInputChange = e => {
		this.setState({
			newTodoField: e.target.value
		});
	};

	addToDo = e => {
		e.preventDefault();
		const newTodoArrayItem = {
			task: this.state.newTodoField,
			completed: false,
			id: Date.now()
		};
		this.setState({
			toDosArray: [...this.state.toDosArray, newTodoArrayItem],
			newTodoField: ""
		});
	};

	selectExistingToDo = e => {
		const selected = [...this.state.toDosArray].map(el => {
			if (el.id.toString() === e.target.id) {
				el.completed = !el.completed;
				return el;
			} else return el;
		});
		this.setState({ toDosArray: selected });
	};

	clearToDo = e => {
		e.preventDefault();
		let toDosArray = this.state.toDosArray.filter(el => el.completed === false);
		this.setState({ toDosArray });
	};

	render() {
		return (
			<section>
				<div>
					<h2>Todo List: MVP</h2>
					<ToDoList
						toDosArrayC={this.state.toDosArray}
						selectExistingToDoC={this.selectExistingToDo}
					/>
				</div>
				<div>
					<ToDoForm
						value={this.state.newTodoField}
						addToDoC={this.addToDo}
						formInputChangeC={this.formInputChange}
						clearToDoC={this.clearToDo}
					/>
				</div>
			</section>
		);
	}
}

export default App;
