import React from "react";
import "./Todo.css";

const Todo = props => {
	return (
		<div
			onClick={props.selectExistingToDoG}
			className={`${props.todoName.completed}`}
			id={props.todoName.id}
		>
			{props.todoName.task}
		</div>
	);
};

export default Todo;
