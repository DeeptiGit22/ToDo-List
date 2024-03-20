import React from "react";
import Nav from "../components/Nav";
import TodoList from "../features/todo/components/TodoList";
import { TodoListProvider } from "../features/todo/hooks/useToDoListContext";

export default function Home() {
	return (
		<TodoListProvider>
			<Nav />
			<TodoList />
		</TodoListProvider>
	);
}
