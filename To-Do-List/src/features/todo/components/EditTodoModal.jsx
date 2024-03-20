import React, { useState } from "react";
import Button from "../../../components/Button";
import { useTodoList } from "../hooks/useToDoListContext";

function EditTodoModal(props) {
	const { modal, task } = props; // Destructure props to access modal function and task details
	const [title, setTitle] = useState(task.title || ""); // Initialize title state with task title
	const [description, setDescription] = useState(task.description || ""); // Initialize description state with task description
	const [error, setError] = useState("");
	const { editToDoTask } = useTodoList();

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission behavior
		if (title && description) {
			editToDoTask(task.id, title, description);
			modal();
		} else {
			setError("Please fill both Title and Description");
		}
	};

	return (
		<div>
			<h2>Edit Task</h2>
			<form>
				<div className='m-2 mb-2'>
					<div className='mb-2'>
						<label htmlFor='title'>Title</label>
					</div>
					<input
						type='text'
						id='title'
						className='input-field'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						placeholder='Title of your task'
					/>
				</div>
				<div className='m-2 mb-3'>
					<div className='mb-2'>
						<label htmlFor='description'>Description</label>
					</div>
					<textarea
						className='input-field'
						rows={4}
						cols={50}
						id='description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
						placeholder='Describe your task'
					/>
				</div>
			</form>
			{error && (
				<p className='mx-2' style={{ color: "red" }}>
					{error}
				</p>
			)}

			<div className='d-flex'>
				<Button
					name={"Save Changes"}
					className={"btn btn-info mx-2"}
					onClick={handleSubmit}
				/>
				<Button
					name={"Cancel"}
					className={"btn btn-danger mx-2"}
					onClick={modal}
				/>
			</div>
		</div>
	);
}

export default EditTodoModal;
