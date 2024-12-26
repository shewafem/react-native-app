import React, { createContext, useState, useCallback, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    //Определяем задачи, используем useState hook
    const [tasks, setTasks] = useState([]);
    
	useEffect(() => {
		const temp = localStorage.getItem("tasks")
		const loadedTasks = JSON.parse(temp)

		if(loadedTasks) {
			setTasks(loadedTasks)
		}
	}, [])

	useEffect(() => {
		const temp = JSON.stringify(tasks)
		localStorage.setItem("tasks", temp)
	}, [tasks])


    /*Функция для добавления задачи.
    Создается newTask с введённым текстом, 
    id = текущая дата, не выполнена изначально.
    Далее setTasks добавляет задачу в tasks*/
    const addTask = useCallback((text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }, []);

    /*Функция для удаления задачи.
    Передается id задачи и фильтр массива tasks*/
    const deleteTask = useCallback((id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, []);

    /*Функция переключения состояния задачи.
    Передается id задачи и происходит изменение состояния task*/
    const toggleCompleted = useCallback((id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }, []);

    /*Функция редактирования задачи.
    Передается id задачи и новый текст, происходит изменение текста task*/
    const editTask = useCallback((id, newText) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, text: newText } : task
            )
        );
    }, []);

    return (
        /*Определяем TaskProvider который будет давать 
        доступ к данным контекста своим детям*/
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleCompleted, editTask}}>
            {children}
        </TaskContext.Provider>
    );
};