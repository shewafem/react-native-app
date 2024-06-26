// screens/AddToDoScreen.js
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function AddToDoScreen({ navigation }) {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Добавить новую задачу</Text>
			<TextInput
				style={styles.input}
				placeholder="Введите задачу"
			/>
			<Button title="Добавить"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginBottom: 20,
	},
});

export default AddToDoScreen;
