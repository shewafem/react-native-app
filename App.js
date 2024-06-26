// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ToDoListScreen from './screens/ToDoListScreen';
import AddToDoScreen from './screens/AddToDoScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ToDoList" component={ToDoListScreen} />
        <Stack.Screen name="AddToDo" component={AddToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;