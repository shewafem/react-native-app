import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Сделать домашку", completed: true },
        { id: 2, text: "Сходить в зал", completed: false },
    ]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleCompleted }}>
            {children}
        </TaskContext.Provider>
    );
};