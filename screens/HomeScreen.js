// screens/HomeScreen.js
import React from "react";
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
	return (
        //Вью с текстом и двумя кнопками с навигацией на другие страницы
		<View style={styles.container}>
		<Text style={styles.title}>Что вы хотите сделать?</Text>
			<Button
				buttonStyle={styles.btnPrimary}
				titleStyle={styles.btnTitle}
				leftIcon={{ type: 'font-awesome', name: 'comment' }}
				title="Посмотреть to-do лист"
				onPress={() => navigation.navigate("ToDoList")}
			/>
			<Button
				buttonStyle={styles.btnPrimary}
				titleStyle={styles.btnTitle}
				title="Добавить новую задачу"
				onPress={() => navigation.navigate("AddToDo")}
			/>
		</View>
	);
}


//Определение стилей
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontFamily: "ubuntu-mono-bold",
		fontSize: 24,
		marginBottom: 20,
		fontWeight: 'bold',
	},
	btnPrimary: {
		width: 350,
		margin: 10,
		backgroundColor: 'rgba(78, 116, 289, 1)',
		borderRadius: 3,
		},
	btnTitle: {
		fontFamily: "ubuntu-mono-regular",
		fontSize: 24,
	},
});

export default HomeScreen;
