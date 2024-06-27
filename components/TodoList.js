//Импортируем useState hook в самом начале
import React, { useState, useContext } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from '@rneui/themed';
import TodoItem from "./TodoItem";
//Импортируем контекст
import { TaskContext } from '../TaskContext'


export default function TodoList () {

	const navigation = useNavigation();
	//Используем конеткст
	const { tasks, deleteTask, toggleCompleted } = useContext(TaskContext);

	// Вывод компонента (рендер)
	return (
		<View style={styles.taskContainer}>
			{/* Используем FlatList для вывода списка однородных компонентов */}
			<FlatList
				data={tasks}
				keyExtractor={(task) => task.id}
				renderItem={({ item }) => (
					<TodoItem
						task={item}
						deleteTask={deleteTask}
						toggleCompleted={toggleCompleted}
					/>
				)}
			/>
			{/* Инпут для новой задачи который при смене текста вызывает setText */}
			<View>
				{/*<TextInput
					value={text}
					onChangeText={setText}
					placeholder="Новая задача"
					style={styles.input}
				/>*/}
				<Button type="primary" titleStyle={styles.buttonTitle} 
				//При нажатии на кнопку переходим к странице 'AddToDo'
				buttonStyle={styles.addButton} onPress={() => navigation.navigate("AddToDo")}>Добавить
				<Icon name='plus-circle' style={styles.btnIcon} type='font-awesome' color="white"/></Button>
			</View>
		</View>
	);
}


//Определение стилей с помощью StyleSheet

const styles = StyleSheet.create({
	taskContainer: {
		justifyContent: 'space-between',
	},
	addButton: {
		fontFamily: "ubuntu-mono-regular",
		backgroundColor: 'rgba(78, 116, 289, 1)',
		borderRadius: 3,
		},
	buttonTitle: {
		fontSize: 24,
		color:"white", 
		fontFamily: 'ubuntu-mono-bold',
	},
	btnIcon: {
		marginLeft: 10,
	}
});
