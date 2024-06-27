import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList() {
	// Хук состояния для наших задач [геттер, сеттер]
	const [tasks, setTasks] = useState([
		{ id: 1, text: "Сделать домашку", completed: true },
		{ id: 2, text: "Сходить в зал", completed: false },
	]);

	// Хук состояния для текста [геттер, сеттер]
	const [text, setText] = useState("");

	// Функция добавления задачи
	function addTask() {
		const newTask = { id: Date.now(), text, completed: false };
		setTasks([...tasks, newTask]);
		setText("");
	}
	// Функция удаления задачи
	function deleteTask(id) {
		setTasks(tasks.filter((task) => task.id !== id));
	}
	// Функция для переключения выполнения
	function toggleCompleted(id) {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	}

	// Render TodoList Component
	return (
		<View>
			{tasks.map((task) => (
				<TodoItem
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					toggleCompleted={toggleCompleted}
				/>
			))}
			<TextInput
				value={text}
				onChangeText={setText}
				placeholder="Новая задача"
			/>
			<Button title="Добавить" onPress={addTask} />
		</View>
	);
}
