import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import ScreenA from './components/ScreenA';
// SafeAreaView -> adjusts the view to the users device

// Interchange components
// import FlatListTest from './components/FlatListTest';
// import ListCreator from './components/ListCreator';
// import CounterTesting from './components/CounterTesting';
// import SectionListExample from './components/SectionList';
// import UserInputs from './components/UserInputs';
// import CustomButtons from './components/CustomButtons';
// import AlertToast from './components/Topics/Alert';
// import ModalTesting from './components/ModalTesting';
// import ImageTesting from './components/ImageTesting';
// import CustomComponentsAndProps from './components/CustomComponentsAndProps';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="A" component={ScreenA} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
