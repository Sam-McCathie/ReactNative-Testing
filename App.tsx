import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
// SafeAreaView -> adjusts the view to the users device

// Interchange components
import FlatListTest from './components/FlatListTest';
import ListCreator from './components/ListCreator';
import CounterTesting from './components/CounterTesting';
import SectionListExample from './components/SectionList';
import UserInputs from './components/UserInputs';
import CustomButtons from './components/CustomButtons';
import AlertToast from './components/Alert';
import ModalTesting from './components/ModalTesting';
import ImageTesting from './components/ImageTesting';
import CustomComponentsAndProps from './components/CustomComponentsAndProps';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    // <SafeAreaView style={styles.body}>
    <Navigation />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'grey',
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
