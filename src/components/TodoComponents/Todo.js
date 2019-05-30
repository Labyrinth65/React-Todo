import React from "react";

const Todo = props => {
	return (
		<div
			onClick={props.selectExistingToDoG}
			className="toDoItem"
			id={props.todoName.id}
		>
			{props.todoName.task}
		</div>
	);
};

export default Todo;
