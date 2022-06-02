import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // options fall inside this object
          tabBarIcon: ({focused}) => {
            return (
              <Text style={focused ? styles.focused : styles.notFocused}>
                {route.name === 'A' ? 'Screen A' : 'Home'}
              </Text>
            );
          },
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'grey',
          // there are also props for inactive
          tabBarShowLabel: false,
        })}

        // tabBarOptions={{activeTintColor: 'red'}}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="A" component={ScreenA} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  focused: {
    color: 'white',
    fontSize: 15,
  },
  notFocused: {
    color: 'grey',
    fontSize: 10,
  },
});

export default App;
