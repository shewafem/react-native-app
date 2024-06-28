//Импортируем useState hook в самом начале
import React, { useState, useContext } from "react";
import { View, Platform, FlatList, StyleSheet, ActionSheetIOS } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from '@rneui/themed';
import TodoItem from "./TodoItem";
//Импортируем контекст
import { TaskContext } from '../TaskContext'


export default function TodoList () {

	const navigation = useNavigation();
	//Подписываемся на контекст с помощью хука useContext
	const { tasks, deleteTask, toggleCompleted } = useContext(TaskContext);

	//Определения окна действий iOS 
	const showActionSheet = (task) => {
		//если платформа iOS
        if (Platform.OS === 'ios') {
			//показываем окно с опциями
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ["Отменить", "Редактировать", "Удалить"],
                    destructiveButtonIndex: 2,
                    cancelButtonIndex: 0,
                },
				//выбираем действие с задачей в зависимости от нажатой кнопки
                buttonIndex => {
                    if (buttonIndex === 1) {
                        navigation.navigate("EditToDo", { task });
                    } else if (buttonIndex === 2) {
                        deleteTask(task.id);
                    }
                }
            );
        }
    };
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
						onPress={() => toggleCompleted(item.id)}
						onLongPress={() => showActionSheet(item)}
					/>
				)}
			/>
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
