import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import Home from './android/app/src/screens/Home';
import Quiz from './android/app/src/screens/Quiz';
import Score from './android/app/src/screens/Score';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = ()=>{

  const Stack = createNativeStackNavigator();

  return(

    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Shreyansh's Quiz">
          <Stack.Screen name = "Shreyansh's Quiz" component={Home}/>
          <Stack.Screen name = 'Quiz' component={Quiz}/>
          <Stack.Screen name = 'Score' component={Score}/>
        </Stack.Navigator>
      </NavigationContainer>
    

  );


}


export default App;
