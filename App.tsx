import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Linking,
} from 'react-native';
// StylesSheet -> allows you to add styles. Styles are added inside objects like you would with React
// Text -> replaces h1, p, span tags etc
// View -> replaces div
// SafeAreaView -> adjusts the view to the users device

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.text}>Yes</Text>
        <Button
          title="Ferg"
          color="white"
          onPress={() => {
            Linking.openURL('https://fergus.com/en-nz/');
          }}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
  },
});

export default App;
