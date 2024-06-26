// screens/ToDoListScreen.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

function ToDoListScreen({ navigation }) {
	const toDoList = ([
		{ id: "1", task: "Сделать домашку" },
		{ id: "2", task: "Сходить в зал" },
	]);

	return (
		<View style={styles.container}>
			<FlatList
				data={toDoList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Text style={styles.item}>{item.task}</Text>
				)}
			/>
			<Button
				title="Добавить новую задачу"
				onPress={() => navigation.navigate("AddToDo")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	item: {
		padding: 15,
		fontSize: 18,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
});

export default ToDoListScreen;
