import React from "react";

class ToDoForm extends React.Component {
	render() {
		return (
			<form>
				<input
					onSubmit={this.props.addToDoC}
					onChange={this.props.formInputChangeC}
					value={this.props.value}
					placeholder="...todo"
					field="todo"
				/>
				<button onClick={this.props.addToDoC}>Add Todo</button>
				<button onClick={this.props.clearToDoC}>Clear Completed</button>
			</form>
		);
	}
}

export default ToDoForm;
