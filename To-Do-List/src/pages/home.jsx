import React from "react";
import Nav from "../components/Nav";
import TodoList from "../features/todo/components/TodoList";

export default function Home() {
	return (
		<>
			<Nav />
			<TodoList />
		</>
	);
}
