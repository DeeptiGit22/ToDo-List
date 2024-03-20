import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Create a context
const TodoListContext = createContext();

export const useTodoList = () => useContext(TodoListContext);

export function TodoListProvider({ children }) {
	const [todoTasks, setTodoTasks] = useState(
		JSON.parse(localStorage.getItem("todoList")) || []
	);
	// const addTask = (task) => {
	// 	const updatedTasks = [...todoTasks, task];
	// 	setTodoTasks(updatedTasks);
	// 	localStorage.setItem("todoList", JSON.stringify(updatedTasks));
	// };
	const addTask = (title, description) => {
		const newTask = {
			id: uuidv4(), // Generate a unique id
			title,
			description,
		};

		const updatedTasks = [...todoTasks, newTask];
		setTodoTasks(updatedTasks);
		localStorage.setItem("todoList", JSON.stringify(updatedTasks));
	};
	const deleteTask = (taskToDelete) => {
		const updatedTasks = todoTasks.filter((task) => task !== taskToDelete); // Filter out the task to delete
		setTodoTasks(updatedTasks); // Update tasks state
		localStorage.setItem("todoList", JSON.stringify(updatedTasks)); // Update localStorage
	};

	const editToDoTask = (taskId, updatedTitle, updatedDescription) => {
		const updatedTasks = todoTasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					title: updatedTitle,
					description: updatedDescription,
				};
			}
			return task;
		});

		setTodoTasks(updatedTasks);
		localStorage.setItem("todoList", JSON.stringify(updatedTasks));
	};

	return (
		<TodoListContext.Provider
			value={{ todoTasks, addTask, deleteTask, editToDoTask }}>
			{children}
		</TodoListContext.Provider>
	);
}
