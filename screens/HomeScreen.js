// screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>To-Do приложение</Text>
			<Button
				title="Посмотреть to-do лист"
				onPress={() => navigation.navigate("ToDoList")}
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
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
});

export default HomeScreen;
