import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
//импортируем стильные чекбоксы
import { CheckBox, Icon, Input } from '@rneui/themed';
//импортируем навигацию
import { useNavigation } from "@react-navigation/native";

export default function TodoItem({ task, deleteTask, toggleCompleted, onLongPress, onPress }) {

	const navigation = useNavigation();

	return (
		<TouchableOpacity style={styles.todoItem}
            onLongPress={onLongPress}
			onPress={onPress}>
			{/*<View style={styles.todoItem}>*/}
			{/* Чекбокс для переключения задачи в состояние выполнено/не выполнено 
			При нажатии происходит смена состояния с помощью toggleCompleted*/}
				<View style={styles.checkbox}>
					<CheckBox
						checked={task.completed}
						onPress={() => toggleCompleted(task.id)}
						style={styles.checkbox}
					/>
				</View>
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
					//Переход на экран EditToDoScreen.js
					onPress={() => navigation.navigate("EditToDo", { task })}
					style={styles.editButton}
				>
				<Icon name='edit' type='font-awesome' color="white"/>
				</TouchableOpacity>
				<TouchableOpacity
					//Удаление задачи при нажатии с помощью deleteTask()
					onPress={() => deleteTask(task.id)}
					style={styles.deleteButton}
				>
				<Icon name='trash' type='font-awesome' color="white"/>
				</TouchableOpacity>
			{/*</View>*/}
		</TouchableOpacity>
	);
}

//Определение стилей с помощью StyleSheet

const styles = StyleSheet.create({
	todoItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8,
		padding: 4,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 10,
		backgroundColor: 'white',
	},
	todoItemText: {
		flex: 1,
		marginRight: 8,
		color: '#333',
		fontFamily: 'ubuntu-mono-regular',
		fontSize: 18,
	},
	completed: {
		textDecorationLine: 'line-through',
		color: '#888',
	},
	deleteButton: {
		backgroundColor: '#ff6347',
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 7,
		marginRight: 10,
	},
	deleteButtonText: {
		color: '#fff',
	},
	editButton: {
		backgroundColor: 'lightgreen',
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 7,
		marginRight: 10,
	},
});