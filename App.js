// Импортирование доп. библиотек и экранов
import React, { useState, useEffect, useCallback} from "react";
import Font, {useFonts} from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ToDoListScreen from "./screens/ToDoListScreen";
import AddToDoScreen from "./screens/AddToDoScreen";
import EditToDoScreen from "./screens/EditToDoScreen";
import * as SplashScreen from 'expo-splash-screen';
import {View, StyleSheet, ActivityIndicator, Text } from 'react-native';
//TaskProvider для использования контекста
import { TaskProvider } from "./TaskContext";

//Создание нашего стека навигации
const Stack = createStackNavigator();

function App() {
  //Хук загрузки шрифтов
  const [fontsLoaded, fontError] = useFonts({
      "ubuntu-mono-regular": require("./assets/fonts/UbuntuMono.ttf"),
      "ubuntu-mono-bold": require("./assets/fonts/UbuntuMono-Bold.ttf"),
  });

  //ActivityIndicator во время загрузки шрифтов
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Загрузка</Text>
      </View>
    )
  }


  return (
    /*Контейнер навигации в котором представлены 
    наши страницы как стек (т.е. будут накладываться друг на друга)
    Оборачиваем в TaskProvider для доступа контекста в приложении*/
    <TaskProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" onLayout={onLayoutRootView}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главная' }}/>
            <Stack.Screen name="ToDoList" component={ToDoListScreen} options={{ title: 'Мой список задач 📝' }}/>
            <Stack.Screen name="AddToDo" component={AddToDoScreen} options={{ title: 'Добавление задачи' }}/>
            <Stack.Screen name="EditToDo" component={EditToDoScreen} options={{ title: 'Редактирование задачи ✍' }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </TaskProvider>
  );
}


//Определение стилей с помощью StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
//экспорт App.js для использования в других файлах
export default App;