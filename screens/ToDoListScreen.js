// screens/ToDoListScreen.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import TodoList from "../components/TodoList";


function ToDoListScreen() {
	//Вью со списком наших дел и кнопкой для добавления новой задачи
	return (
		<View style={styles.container}>
			<TodoList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
});

export default ToDoListScreen;