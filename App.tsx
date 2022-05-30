import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
// SafeAreaView -> adjusts the view to the users device

// Interchange components
import FlatListTest from './components/FlatListTest';
import ListCreator from './components/ListCreator';
import CounterTesting from './components/CounterTesting';
import SectionListExample from './components/SectionList';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.body}>
      <SectionListExample />
    </SafeAreaView>
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
