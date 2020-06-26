
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screen/SearchScreen';
import TestScreen from './src/screen/TestScreen';
import ResultsShowScreen from './src/screen/ResultsShowScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Food'>
        <Stack.Screen name="Food" component={SearchScreen} />
        <Stack.Screen name="Restaurant" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;