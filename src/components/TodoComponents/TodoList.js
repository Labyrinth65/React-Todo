import React from "react";
import Todo from "./Todo";

class ToDoList extends React.Component {
	render() {
		return (
			<div>
				{this.props.toDosArrayC.map(el => (
					<Todo
						key={el.id}
						todoName={el}
						selectExistingToDoG={this.props.selectExistingToDoC}
					/>
				))}
			</div>
		);
	}
}

export default ToDoList;
