import React from "react";
import Nav from "../components/Nav";
import TodoList from "../features/todo/components/TodoList";
import NewTodoModal from "../features/todo/components/NewTodoModal";

export default function Home() {
	return (
		<>
			<Nav />
			<TodoList />
		</>
	);
}
