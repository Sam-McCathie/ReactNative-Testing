import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
// StylesSheet -> allows you to add styles. Styles are added inside objects like you would with React
// Text -> replaces h1, p, span tags etc
// View -> replaces div
// SafeAreaView -> adjusts the view to the users device

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text>Yes</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'pink',
  },
});

export default App;
