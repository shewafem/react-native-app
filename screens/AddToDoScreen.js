import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput from "react-native-text-input-interactive";
import { Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
//Получаем контекст
import { TaskContext } from "../TaskContext";

function AddToDoScreen() {
    const navigation = useNavigation();

	//Задаем хуки для состояния текста и ошибки
	const [text, setText] = useState("");
	const [error, setError] = useState(""); // Состояние для ошибки
	const { addTask } = useContext(TaskContext);

	//функция-хендлер добавления задачи
	const handleAddTask = () => {
		if (text.trim() === "") {
			// Проверка на пустой инпут
			setError("Поле задачи не может быть пустым!");
			return;
		}

		if (addTask) {
			addTask(text);
			setText(""); // Очистить инпут после добавления задачи
			setError(""); // Очистить сообщение об ошибке
			navigation.navigate("ToDoList");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Добавьте новую задачу</Text>
			<TextInput
				style={styles.input}
				placeholder="Введите задачу"
				value={text}
				onChangeText={(value) => {
					setText(value);
					if (error) setError(""); // Очистить ошибку при изменении текста
				}}
			/>
			<Text style={styles.error}>{error ? error : null}</Text>
			{/*<Button titleStyle={styles.buttonTitle}
				buttonStyle={styles.addButton} onPress={addPhoto}>
                Выбрать фото
                <Icon
                    name="photo"
                    style={styles.btnIcon}
                    type="font-awesome"
                    color="white"
                /></Button>*/}
			<Button
				type="primary"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.addButton}
				onPress={handleAddTask}
			>Добавить
				<Icon
					name="plus-circle"
					style={styles.btnIcon}
					type="font-awesome"
					color="white"
				/>
			</Button>
		</View>
	);
}

//Определение стилей с помощью StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "start",
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		fontFamily: "ubuntu-mono-regular",
	},
	addButton: {
		marginTop: 10,
		fontFamily: "ubuntu-mono-regular",
		backgroundColor: "rgba(78, 116, 289, 1)",
		borderRadius: 5,
	},
	buttonTitle: {
		fontSize: 24,
		color: "white",
		fontFamily: "ubuntu-mono-bold",
	},
	btnIcon: {
        marginLeft: 10,
	},
	error: {
		color: "red",
		marginTop: 10,
		marginBottom: 10,
		fontSize: 16,
		fontFamily: "ubuntu-mono-bold",
	}, // Стиль для ошибки
});

//Возможность использования в других частях приложения
export default AddToDoScreen;
