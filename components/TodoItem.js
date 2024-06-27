import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
//импортируем стильные чекбоксы
import { CheckBox, Icon } from '@rneui/themed';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
	return (
		<View style={styles.todoItem}>
		{/* Чекбокс для переключения задачи в состояние выполнено/не выполнено 
		При нажатии происходит смена состояния с помощью toggleCompleted*/}
			<CheckBox
				checked={task.completed}
				onPress={() => toggleCompleted(task.id)}
				style={styles.checkbox}
			/>
			<Text
			//Описываем стили в зависимости от состояния задачи (зачеркнуто/не зачеркнуто)
				style={[
					styles.todoItemText,
					task.completed && styles.completed
				]}
			>
				{task.text}
				
			</Text>
			<TouchableOpacity
				//Удаление задачи при нажатии с помощью deleteTask()
				onPress={() => deleteTask(task.id)}
				style={styles.deleteButton}
			>
				<Text style={styles.deleteButtonText}>X</Text>
			</TouchableOpacity>
		</View>
	);
}

//Определение стилей

const styles = StyleSheet.create({
	todoItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8,
		padding: 8,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 4,
	},
	todoItemText: {
		flex: 1,
		marginRight: 8,
		color: '#333',
	},
	completed: {
		textDecorationLine: 'line-through',
		color: '#888',
	},
	deleteButton: {
		backgroundColor: '#ff6347',
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 4,
		width: '8%',
	},
	deleteButtonText: {
		color: '#fff',
	},
	checkbox: {
		marginRight: 8,
	},
});