// Импортирование доп. библиотек и экранов
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ToDoListScreen from './screens/ToDoListScreen';
import AddToDoScreen from './screens/AddToDoScreen';

//Создание нашего стека навигации
const Stack = createStackNavigator();

function App() {
  return (
    /*Контейнер навигации в котором представлены 
    наши страницы как стек (т.е. будут накладываться друг на друга)*/
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ToDoList" component={ToDoListScreen} />
        <Stack.Screen name="AddToDo" component={AddToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//экспорт App.js для использования в других файлах
export default App;