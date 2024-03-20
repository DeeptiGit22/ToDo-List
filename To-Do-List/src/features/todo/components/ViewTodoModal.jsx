import React, { useState } from "react";
import Button from "../../../components/Button";

function ViewTodoModal(props) {
	const { modal, task } = props; // Destructure props to access modal function and task details

	return (
		<div>
			<h3 className='text-center heading'>Your Task</h3>
			<div className='mt-4'>
				<p className='sub-heading border-bottom'>{task.title}</p>
				<p>{task.description}</p>
			</div>
		</div>
	);
}

export default ViewTodoModal;
