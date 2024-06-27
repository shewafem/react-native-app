import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    //Определяем задачи, используем useState hook
    const [tasks, setTasks] = useState([
        { id: 1, text: "Сделать домашку", completed: true },
        { id: 2, text: "Сходить в зал", completed: false },
    ]);

    /*Функция для добавления задачи.
    Создается newTask с введённым текстом, 
    id = текущая дата, не выполнена изначально.
    Далее setTasks добавляет задачу в tasks*/
    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    /*Функция для удаления задачи.
    Передается id задачи и фильтр массива tasks*/
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    /*Функция переключения состояния задачи.
    Передается id задачи и происходит изменение состояния task*/
    const toggleCompleted = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    /*Функция редактирования задачи.
    Передается id задачи и новый текст, происходит изменение текста task*/
    const editTask = (id, newText) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, text: newText } : task
            )
        );
    };

    return (
        /*Определяем TaskProvider который будет давать 
        доступ к данным контекста своим детям*/
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleCompleted, editTask}}>
            {children}
        </TaskContext.Provider>
    );
};