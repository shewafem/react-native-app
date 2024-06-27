import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput from "react-native-text-input-interactive";
import { Button, Icon } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
// Получаем контекст
import { TaskContext } from "../TaskContext";

function EditToDoScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    // Получаем задачу из параметров маршрута
    const { task } = route.params;

    // Задаем хуки для состояния текста и ошибки
    const [text, setText] = useState(task ? task.text : "");
    const [error, setError] = useState(""); // Состояние для ошибки
    const { editTask } = useContext(TaskContext);

    useEffect(() => {
        if (task) {
            setText(task.text);
        }
    }, [task]);

    // функция-хендлер редактирования задачи
    const handleEditTask = () => {
        if (text.trim() === "") {
            // Проверка на пустой инпут
            setError("Поле задачи не может быть пустым!");
            return;
        }

        if (editTask) {
            editTask(task.id, text);
            setError(""); // Очистить сообщение об ошибке
            navigation.navigate("ToDoList");
        } else {
            console.error("editTask is undefined");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Редактировать задачу</Text>
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
            <Button
                type="primary"
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.addButton}
                onPress={handleEditTask}
            >
                Обновить
                <Icon
                    name="refresh"
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
export default EditToDoScreen;
