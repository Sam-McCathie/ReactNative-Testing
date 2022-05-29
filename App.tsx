import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
// Interchange components
import FlatListTest from './components/FlatListTest';
import ListCreator from './components/ListCreator';
import CounterTesting from './components/CounterTesting';

// SafeAreaView -> adjusts the view to the users device

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.body}>
      <FlatListTest />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default App;
