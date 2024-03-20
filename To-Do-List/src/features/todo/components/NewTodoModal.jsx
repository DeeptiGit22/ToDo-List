import React, { useState } from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { useTodoList } from "../hooks/useToDoListContext";

function NewTodoModal(props) {
	const { modal } = props;
	const { addTask } = useTodoList();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && description) {
			addTask(title, description);
			setTitle("");
			setDescription("");
			modal();
			navigate("/");
		} else {
			setError("Please Fill both Title and Description");
		}
	};
	return (
		<div>
			<h2 className='text-center text-uppercase mb-2'>Add Task</h2>
			<form>
				<div className='m-2 mb-2'>
					<div className='mb-2'>
						<label htmlFor='title'>Title</label>
					</div>
					<input
						className='input-field'
						type='text'
						id='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Title of your task'
						required
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
						placeholder='Describe your task'
						required
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
					name={"Create"}
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

export default NewTodoModal;
