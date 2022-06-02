import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './components/Home';
import ScreenA from './components/ScreenA';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="A"
          component={ScreenA}
          options={{
            title: 'Screen A', // update title of screen
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
